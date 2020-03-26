<!DOCTYPE html>
<html>
<head>
    <base href="/">
    <title>Circuito Mundial de Surf</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="{{ asset("css/app.css") }}">
    <!-- 1. Load libraries -->
    <!-- Polyfill(s) for older browsers -->
    <script src="{{ asset("node_modules/core-js/client/shim.min.js") }}"></script>
    <script src="{{ asset("node_modules/zone.js/dist/zone.j") }}s"></script>
    <script src="{{ asset("node_modules/reflect-metadata/Reflect.js") }}"></script>
    <script src="{{ asset("node_modules/systemjs/dist/system.src.js") }}"></script>
    <!-- 2. Configure SystemJS -->
    <script src="{{ asset("js/systemjs.config.js") }}"></script>
    <script>
        System.import('app').catch(function(err){ console.error(err); });
    </script>
</head>
<!-- 3. Display the application -->
<body>
<my-app>Loading...</my-app>
</body>
</html>
