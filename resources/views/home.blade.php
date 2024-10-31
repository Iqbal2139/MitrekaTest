<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    @vite('resources/js/app.jsx')
    @vite('resources/css/app.css')
    @vite('resources/js/app.js')
    
</head>
<body>
    <div id="app"></div>
    <script>
        import Dashboard from './components/Dashboard';
        new Dashboard();
    </script>
</body>
@viteReactRefresh
</html>
