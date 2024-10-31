<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    @vite('resources/js/app.jsx')
    @vite('resources/css/app.css')
    @vite('resources/js/app.js')

</head>
<body>
    <div id="app"></div>
    <script>
        import Login from './components/Login';
        new Login();
    </script>
</body>
</html>
