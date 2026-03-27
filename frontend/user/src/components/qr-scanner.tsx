
"use client";

import { useEffect, useRef, useState } from "react";
import jsQR from "jsqr";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface QrScannerProps {
    onScan: (data: string | null) => void;
}

export function QrScanner({ onScan }: QrScannerProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isMounted, setIsMounted] = useState(false);
    const [hasCameraPermission, setHasCameraPermission] = useState<boolean | null>(null);
    const [scanState, setScanState] = useState<'scanning' | 'success'>('scanning');
    const { toast } = useToast();
    const onScanRef = useRef(onScan);
    const streamRef = useRef<MediaStream | null>(null);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        onScanRef.current = onScan;
    }, [onScan]);

    useEffect(() => {
        if (!isMounted) {
            return;
        }

        let animationFrameId: number;

        const tick = () => {
            if (videoRef.current && canvasRef.current && videoRef.current.readyState === videoRef.current.HAVE_ENOUGH_DATA) {
                const canvas = canvasRef.current.getContext("2d");
                if (canvas) {
                    canvas.canvas.height = videoRef.current.videoHeight;
                    canvas.canvas.width = videoRef.current.videoWidth;
                    canvas.drawImage(
                        videoRef.current,
                        0,
                        0,
                        canvas.canvas.width,
                        canvas.canvas.height
                    );
                    try {
                        const imageData = canvas.getImageData(0, 0, canvas.canvas.width, canvas.canvas.height);
                        const code = jsQR(imageData.data, imageData.width, imageData.height, {
                            inversionAttempts: "dontInvert",
                        });
                        if (code && code.data && scanState === 'scanning') {
                            setScanState('success'); // Set success state immediately for visual feedback
                            setTimeout(() => {
                                onScanRef.current(code.data);
                            }, 500); // Wait 500ms before calling onScan for navigation
                            return; // Stop scanning
                        }
                    } catch (error) {
                         console.error("jsQR error:", error);
                    }
                }
            }
            if (scanState === 'scanning') {
               animationFrameId = requestAnimationFrame(tick);
            }
        };

        const getCameraPermission = async () => {
            try {
                if (!navigator.mediaDevices?.getUserMedia) {
                    throw new Error('Camera not available on this browser');
                }
                const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
                streamRef.current = stream;
                setHasCameraPermission(true);

                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                    videoRef.current.setAttribute('playsinline', 'true');
                    
                    videoRef.current.oncanplay = () => {
                       animationFrameId = requestAnimationFrame(tick);
                    };
                }
            } catch (error) {
                console.error('Error accessing camera:', error);
                setHasCameraPermission(false);
                toast({
                    variant: 'destructive',
                    title: 'Camera Access Denied',
                    description: 'Please enable camera permissions in your browser settings to use this feature.',
                });
                onScanRef.current(null);
            }
        };

        getCameraPermission();

        return () => {
            cancelAnimationFrame(animationFrameId);
            if (streamRef.current) {
                streamRef.current.getTracks().forEach(track => track.stop());
            }
        };
    }, [isMounted, toast, scanState]);

    if (!isMounted) {
        return (
            <div className="relative w-full aspect-square rounded-md overflow-hidden border flex items-center justify-center bg-muted">
                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
        );
    }

    return (
        <div className="space-y-4">
            <div className="relative w-full aspect-square rounded-md overflow-hidden border">
                <video ref={videoRef} className="w-full h-full object-cover" autoPlay muted playsInline />
                <canvas ref={canvasRef} className="hidden" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className={cn(
                        "w-3/4 h-3/4 border-4 rounded-lg transition-colors duration-300",
                        scanState === 'scanning' && "border-white",
                        scanState === 'success' && "border-green-500"
                    )}></div>
                </div>
            </div>
            {hasCameraPermission === false && (
                <Alert variant="destructive">
                    <AlertTitle>Camera Access Required</AlertTitle>
                    <AlertDescription>
                        Please allow camera access to use this feature.
                    </AlertDescription>
                </Alert>
            )}
        </div>
    );
}
