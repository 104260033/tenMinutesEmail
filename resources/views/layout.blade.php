<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>@yield('title')</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.3.1/css/bulma.css">
    <link rel="stylesheet" href="/css/app.css">
</head>
<body>
<div id="app">
    @section('header')
        @include('.nav')
    @show

    {{--content--}}
    @yield('content')

    {{--footer--}}

    @section('footer')
        @include('.footer')
    @show

</div>
@verbatim
<script src="/js/app.js"></script>
@endverbatim
</body>
</html>