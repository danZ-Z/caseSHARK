"use client";

import { Image, ImageUp } from "lucide-react";
import React, { DragEvent, useEffect, useRef, useState } from "react";

import { useToast } from "@/components/ui/use-toast"; // Adjust the path as per your project structure
import { UploadDropzone } from "@/lib/uploadthing";

const UploadPhoto = () => {
  const { toast } = useToast();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const InputRef = useRef<HTMLInputElement | null>(null);
  const [isDragOver, setIsDragOver] = useState<boolean | null>(false);
  const [imageUrl, setImageUrl] = useState<string>("");

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    setIsDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file && (file.type === "image/png" || file.type === "image/jpeg" || file.type === "image/jpg")) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    } else {
      toast({
        title: "Uh oh! Something went wrong.",
        description: "Please select a PNG, JPG or JPEG image file.",
        variant: 'destructive'
      });
    }
  };

  useEffect(() => {
    if (imageUrl) {
      window.location.href = `/configure/design/?id=${imageUrl}`;
    }
  }, [imageUrl]);

  return (
    <div
      className={`flex-1 w-full flex flex-col justify-center`}
      onDragOver={() => setIsDragOver(true)}
      onDragLeave={() => setIsDragOver(false)}
      onDrop={handleDrop}>
      <UploadDropzone
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          const urlParts = res[0].url.split('/');
          const identifier = urlParts[urlParts.length - 1];
          setImageUrl(identifier);
        }}
        onUploadError={(error: Error) => {
          alert(`ERROR! ${error.message}`);
        }}
        appearance={{
          container: `${isDragOver ? 'bg-blue-900/10' : 'bg-gray-900/5'} flex flex-col gap-2 min-h-[calc(100vh-26.8rem-1px)] border-none m-0`,
          label: 'm-0 text-md w-full',
          allowedContent: 'text-sm'
        }}
        content={{
          label: isDragOver ? (
            <p className="font-semibold text-zinc-600"><span className="text-zinc-800">Drop file</span> to upload</p>
          ) : (
            <p className="font-semibold text-zinc-600"><span className="text-zinc-800">Click to upload</span> or drag and drop a photo here</p>
          ),
          allowedContent: (
            <div>
              <p>PNG, JPG, JPEG</p>
              <p>Maximum size 4 MB</p>
            </div>),
          uploadIcon: isDragOver ? (
            <ImageUp className="text-zinc-500 size-7" />
          ) : (
            <Image className="text-zinc-500 size-7" />
          ),
        }}
      />

      

    </div>
  );
};

export default UploadPhoto;
