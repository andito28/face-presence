<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index(){
        $users = User::paginate(10);
        return Inertia::render('User/Index',[
            'users' => $users
        ]);
    }

    public function create(){
        return Inertia::render('User/Create');
    }

}
