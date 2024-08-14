// pages/index.js
"use client"
import { useState } from 'react';

export default function Home() {
    const [windowsPath, setWindowsPath] = useState('');
    const [linuxPath, setLinuxPath] = useState('');

    const handleConvert = (event) => {
        event.preventDefault();
        // Replace backslashes with forward slashes
        const convertedPath = windowsPath.replace(/\\/g, '/');
        setLinuxPath(convertedPath);
    };

    return (
        <div className="container">
            <h1>Windows to Linux Path Converter</h1>
            <form onSubmit={handleConvert}>
                <label htmlFor="windowsPath">Enter Windows Path:</label>
                <input
                    type="text"
                    id="windowsPath"
                    value={windowsPath}
                    onChange={(e) => setWindowsPath(e.target.value)}
                    placeholder="C:\Users\YourName\Folder"
                    required
                />
                <button type="submit">Convert</button>
            </form>
            {linuxPath && <p>Linux Path: {linuxPath}</p>}
            <style jsx>{`
                .container {
                    max-width: 600px;
                    margin: 50px auto;
                    padding: 20px;
                    text-align: center;
                    background: #f4f4f4;
                    border-radius: 8px;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                }
                h1 {
                    margin-bottom: 20px;
                    font-size: 24px;
                    color: #000;
                }
                label {
                    display: block;
                    margin-bottom: 8px;
                    color: #000;
                }
                input[type="text"] {
                    width: 100%;
                    padding: 8px;
                    margin-bottom: 12px;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    color: #000;
                }
                button {
                    padding: 10px 15px;
                    background-color: #007bff;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                }
                button:hover {
                    background-color: #0056b3;
                }
                p {
                    margin-top: 20px;
                    font-weight: bold;
                    color: #000;
                }
            `}</style>
        </div>
    );
}
