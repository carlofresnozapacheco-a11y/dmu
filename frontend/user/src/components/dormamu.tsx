
"use client";

import { useState, useCallback, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { QrCode } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { QrScanner } from './qr-scanner';
import { useRouter } from 'next/navigation';

const Dormamu = () => {
    const [isScannerOpen, setIsScannerOpen] = useState(false);
    const { toast } = useToast();
    const router = useRouter();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);


    const handleQrScan = useCallback((data: string | null) => {
        setIsScannerOpen(false);
        if (data) {
            router.push(`/devices/${data}`);
        } else {
            toast({
                variant: "destructive",
                title: "Scan Cancelled",
                description: "The QR code scanning was cancelled.",
            });
        }
    }, [toast, router]);

    return (
        <div className="w-full max-w-4xl mx-auto p-4 md:p-6 space-y-6">
            <div className="text-center">
                <h2 className="text-2xl font-bold">Dormamu Energy</h2>
                <p className="text-muted-foreground">Digital Payments</p>
            </div>
            
            <div className="flex justify-center gap-4">
                <Button onClick={() => setIsScannerOpen(true)} size="lg">
                    <QrCode className="mr-2 h-5 w-5" />
                    Scan QR Code
                </Button>
            </div>

            {isClient && (
              <Dialog open={isScannerOpen} onOpenChange={setIsScannerOpen}>
                  <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                          <DialogTitle>Scan QR Code</DialogTitle>
                          <DialogDescription>
                              Point your camera at a QR code to scan it.
                          </DialogDescription>
                      </DialogHeader>
                      <QrScanner onScan={handleQrScan} />
                  </DialogContent>
              </Dialog>
            )}
        </div>
    );
};

export default Dormamu;
