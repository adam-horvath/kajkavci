import logo from 'assets/images/react-icon.png';

export const getErrorPage = () => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>React Starter Template</title>
    <style>
        
        html {
            font-size: 100%;
        }
        
        body {
            font-size: 1rem;
            background-color: #e6e6e6;
            color: #222228;
            font-family: 'Roboto', sans-serif;
            margin: 0;
            height: 100vh;
        }
        
        header {
            height: 60px;
            width: 100%;
            background-color: #ec6059;
        }

        .container {
            margin: auto;
            height: 60px;
            padding: 0 115px;
        }

        header img {
            width: 145px;
            margin: 16px;
        }
        
        .content {
            text-align: center;
            margin-top: calc(50vh - 60px);
            font-size: 1.5rem;
        }
    
    </style>
</head>
<body>
<header><div class="container"><img src="${logo}" alt="Kajkavci"/></div></header>
<div class="content">
    Service not available.
</div>
</body>
</html>`;

