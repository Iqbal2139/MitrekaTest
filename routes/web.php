<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\ForgotPasswordController;

Route::get('/', function () {
    return redirect('/login');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::view('/login', 'auth.login');
// Rute GET untuk menampilkan halaman
Route::get('/forgot-password', function () {
    return view('auth.forgot-password');
})->name('forgot-password');

// Rute POST untuk mengirim link reset password
Route::post('/forgot-password', [ForgotPasswordController::class, 'sendResetLinkEmail']);
Route::view('/register', 'auth.register');

