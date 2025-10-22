import {
  Cropper,
  CropperCropArea,
  CropperDescription,
  CropperImage,
} from "./image-crop";

export default function Component() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4 bg-background p-8">
      <Cropper
        className="h-96 w-full max-w-2xl"
        image="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=800&fit=crop"
      >
        <CropperDescription />
        <CropperImage />
        <CropperCropArea />
      </Cropper>

      <p
        aria-live="polite"
        role="region"
        className="text-muted-foreground mt-2 text-sm"
      >
        Basic cropper ∙{" "}
        <a
          href="https://github.com/origin-space/image-cropper"
          className="hover:text-foreground underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          API
        </a>
      </p>
    </div>
  );
}
