<?php

namespace App\Http\Controllers;

use App\Notificacion;
use Illuminate\Http\Request;

class NotificaionesController extends Controller
{
    public function index()
    {
        $user = auth()->user();
        $notificaciones = $user->notifications;

        return response()->json([
            'data' => $notificaciones
        ]);
    }

    public function show(Notificacion $model)
    {
        return response()->json([
            'data' => $model
        ]);
    }
}
