<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title')</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <style>
        body {
            font-family: cambria;
        }

        h1 {
            color: aqua;
            font-size: 50px;
            margin-right: 13%;
            font-weight: bold;
            font-family: Edwardian Script ITC;
            text-align: center;
            margin-top: 20px;
            animation: fadeInDown 1s ease-out;
        }

        h2 {
            color: rgb(89, 255, 0);
            font-size: 35px;
            font-family: 'Footlight MT Light';
            text-align: center;
            animation: fadeInLeft 1s ease-out;
            margin-left:17%;
        }

        nav-item a:hover {
            color: aqua;
        }

        p {
            color: rgb(255, 0, 255);
            animation: fadeInUp 1s ease-out;
            text-align: center;
            margin-left:17%;
        }

        .navbar-nav {
            color: rgb(2, 2, 2);
        }

        .nav-link:hover {
            color: rgb(0, 221, 255);
        }

        .navbar-brand:hover {
            color: rgb(255, 0, 255);
        }

        .custom-navbar {
            background: linear-gradient(135deg, rgb(255, 23, 255), rgb(17, 211, 255));
            transition: background 0.5s;
        }

        .custom-navbar:hover {
            background: linear-gradient(135deg, rgb(17, 211, 255), rgb(255, 23, 255));
        }

        .custom-navbar .navbar-brand {
            color: #fff;
            font-weight: bold;
            font-size: 1.5rem;
        }

        .custom-navbar .navbar-nav .nav-link {
            color: #fff;
            margin-right: 15px;
            transition: color 0.3s;
        }

        .custom-navbar .navbar-nav .nav-link:hover {
            color: black;
        }

        .main-content {
            margin-right: 250px;
            padding: 15px;
            min-height: calc(100vh - 70px); /* Adjust to fit navbar height */
            animation: fadeIn 1s ease-out;
        }

        .footer {
            background: linear-gradient(135deg, rgb(17, 211, 255), rgb(255, 23, 255));
            color:rgb(76, 0, 255);
            text-align: center;
            padding: 20px 0;
            position: fixed;
            bottom: 0;
            width: 100%;
            box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
            animation: fadeInUp 1s ease-out;
        }

        .footer p {
            margin: 0;
            font-size: 1.1rem;
        }
        .container p {
            color: white;
        }

    </style>
</head>

<body>
    <h1>Welcome ...</h1>
    <header>
        <!-- Navbar or Header Content -->
        <nav class="navbar navbar-expand-lg navbar-light bg-light custom-navbar">
            <div class="container-fluid"> <a class="navbar-brand" href="#">My Laravel App</a> <button
                    class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span
                        class="navbar-toggler-icon"></span> </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item"> <a class="nav-link" href="{{ route('home') }}">Home</a> </li>
                        <li class="nav-item"> <a class="nav-link" href="{{ route('about') }}">About</a> </li>
                        <li class="nav-item"> <a class="nav-link" href="{{ route('contact') }}">Contact</a> </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-9 main-content">
                <main>@yield('content')</main>
            </div>
            <div class="col-md-3 sidebar">
                <h2>Sidebar</h2>
                <a href="{{ route('home') }}">Dashboard</a>
                <a href="{{ route('profile.edit') }}">Profile</a>
                <a href="#">Settings</a>
                <form action="{{ route('logout') }}" method="POST">
                    @csrf
                    <button type="submit" class="btn btn-link">Logout</button>
                </form>
            </div>
        </div>
    </div>
    <footer class="footer">
        <div class="container">
            <p>&copy; ♪Ashwin Laravel App. All rights reserved.</p>
        </div>
    </footer>
    <script src="{{ asset('js/app.js') }}"></script>
</body>

</html>
