
"use client";

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ref, get, query, orderByChild, equalTo } from 'firebase/database';
import { database } from '@/lib/firebase';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';

interface DeviceDetails {
  serialNumber: string;
  model: string;
  status: 'Available' | 'Inactive' | 'Maintenance';
  deviceType: string;
  manufacturedDate?: string; // Optional manufactured date field
  ownerName?: string; // Optional owner name field
}

export default function DeviceDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const serial = params.serial as string;
  const [device, setDevice] = useState<DeviceDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showStatusDialog, setShowStatusDialog] = useState(false);
  const [dialogDeviceStatus, setDialogDeviceStatus] = useState('');
  const [isClient, setIsClient] = useState(false);
  const [minutes, setMinutes] = useState(30);
  const [kwh, setKwh] = useState(10);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (serial) {
      const fetchDevice = async () => {
        setLoading(true);
        setError(null);
        try {
          const devicesRef = ref(database, 'devices');
          const deviceQuery = query(devicesRef, orderByChild('serialNumber'), equalTo(serial));
          const snapshot = await get(deviceQuery);

          if (snapshot.exists()) {
            const devicesData = snapshot.val();
            const foundDeviceKey = Object.keys(devicesData)[0];
            const deviceData = devicesData[foundDeviceKey];
            const foundDevice = {
              ...deviceData,
              model: deviceData.modelNumber, // Correctly map modelNumber
            } as DeviceDetails;
            
            if (foundDevice.status.toLowerCase() !== 'available') {
              setDialogDeviceStatus(foundDevice.status);
              setShowStatusDialog(true);
            } else {
              setDevice(foundDevice);
            }
          } else {
            throw new Error(`Device with serial number "${serial}" not found.`);
          }
        } catch (err: any) {
          console.error("Firebase error:", err);
          setError(err.message || "Failed to fetch device details. Please try again later.");
        } finally {
          setLoading(false);
        }
      };

      fetchDevice();
    }
  }, [serial]);

  const toPascalCase = (str: string) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const handleDialogClose = () => {
    setShowStatusDialog(false);
    router.push('/');
  };

  if (loading || !isClient) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-24">
            <div className="flex flex-col items-center space-y-4">
                <Loader2 className="h-12 w-12 animate-spin text-primary" />
                <p className="text-lg text-muted-foreground">Loading...</p>
            </div>
        </div>
    );
  }

  return (
    <div className="container mx-auto p-4 sm:p-6 md:p-8">
      <div className="flex items-center mb-6">
        <Button asChild variant="outline" size="icon" className="mr-4">
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back to Dashboard</span>
          </Link>
        </Button>
        <h1 className="text-2xl md:text-3xl font-bold">Start</h1>
      </div>
      
      {error && (
        <Alert variant="destructive" className="max-w-2xl mx-auto">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      
      {device && (
        <Card className="max-w-2xl mx-auto shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl">{device.model}-{device.serialNumber}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-lg pt-6">
            {device.ownerName && (
              <div className="flex justify-between items-center border-b pb-2">
                <span className="font-medium text-muted-foreground">Owner Name</span>
                <span>{device.ownerName}</span>
              </div>
            )}
            <div className="flex justify-between items-center border-b pb-2">
              <span className="font-medium text-muted-foreground">Device Type</span>
              <span>{device.deviceType.toUpperCase()}</span>
            </div>

            {device.deviceType.toUpperCase() === 'TIMER' && (
              <div className="space-y-4 pt-4">
                <div className="flex justify-between items-center">
                  <Label htmlFor="minutes-slider" className="font-medium text-muted-foreground text-lg">Select Minutes</Label>
                  <span className="font-mono bg-muted px-2 py-1 rounded text-lg">{minutes} min</span>
                </div>
                <Slider
                  id="minutes-slider"
                  min={5}
                  max={120}
                  step={5}
                  value={[minutes]}
                  onValueChange={(value) => setMinutes(value[0])}
                />
              </div>
            )}

            {device.deviceType.toUpperCase() === 'KWH-METER' && (
              <div className="space-y-4 pt-4">
                <div className="flex justify-between items-center">
                  <Label htmlFor="kwh-slider" className="font-medium text-muted-foreground text-lg">Select Kwh</Label>
                  <span className="font-mono bg-muted px-2 py-1 rounded text-lg">{kwh} Kwh</span>
                </div>
                <Slider
                  id="kwh-slider"
                  min={1}
                  max={50}
                  step={1}
                  value={[kwh]}
                  onValueChange={(value) => setKwh(value[0])}
                />
              </div>
            )}
          </CardContent>
        </Card>
      )}

      <AlertDialog open={showStatusDialog} onOpenChange={setShowStatusDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Device Not Available</AlertDialogTitle>
            <AlertDialogDescription>
              This device is not currently available. Its status is:{" "}
              <span className="font-semibold">{toPascalCase(dialogDeviceStatus)}</span>.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={handleDialogClose}>Close</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
