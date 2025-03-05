import './App.css';

import { useState } from "react";
import { useDropzone } from "react-dropzone";

function App() {
    const [image, setImage] = useState(null);
    const [processedImage, setProcessedImage] = useState(null);
    const [loading, setLoading] = useState(false);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: "image/*",
        onDrop: (acceptedFiles) => {
            const file = acceptedFiles[0];
            setImage(file);
            setLoading(true);
            handleUpload(file)
                .then(() => setLoading(false))
                .catch((error) => {
                    console.error("Upload failed", error);
                    setLoading(false);
                });
        },
    });

    const handleUpload = async (file) => {
        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await fetch("http://localhost:5100/", {
                method: "POST",
                body: formData,
            });

            const blob = await response.blob();
            const imageUrl = URL.createObjectURL(blob);
            setProcessedImage(imageUrl);

            return imageUrl;
        } catch (error) {
            console.error("Upload failed", error);
            throw error;
        }
    };

    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-100 p-5">
            <div
                {...getRootProps()}
                className={`w-96 h-48 flex items-center justify-center border-2 border-dashed p-4 cursor-pointer bg-white rounded-lg shadow-md ${
                    isDragActive ? "border-blue-500" : "border-gray-300"
                }`}
            >
                <input {...getInputProps()} />
                <p className="text-gray-600">
                    {isDragActive ? "Drop the image here" : "Drag & Drop or Click to Upload"}
                </p>
            </div>

            {image && <p className="mt-4">Uploaded: {image.name}</p>}

            {loading && <p className="mt-4 text-blue-500">Processing image...</p>}

            {processedImage && !loading && (
                <div className="mt-6">
                    <img src={processedImage} alt="Processed"
                         className="max-w-full h-auto border rounded-lg shadow-md"/>
                    <a href={processedImage} download="_rmbg.png" className="mt-2 block text-blue-500 underline">
                        Download Image
                    </a>
                </div>
            )}
        </div>
    );
}

export default App;