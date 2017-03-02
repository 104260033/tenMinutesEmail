@extends('layout')

@section('title','login')


@section('content')

    <section class="section">
        <div class="container">


            <div class="columns">
                <div class="column">
                    <label class="label">Name</label>
                    <p class="control has-icon">
                        <input class="input" type="email" placeholder="Email"  v-model="email" @keydown="errors.clear('email')">
                        <span class="icon is-small">
                        <i class="fa fa-envelope"></i>
                         </span>
                    </p>
                    <span class="help is-danger" v-text="errors.get('email')"></span>
                    <label class="label">Password</label>
                    <p class="control has-icon">
                        <input class="input" type="password" placeholder="Password" v-model="password" @keydown="errors.clear('password')">
                        <span class="icon is-small">
                         <i class="fa fa-lock"></i>
                        </span>
                    </p>
                    <span class="help is-danger" v-text="errors.get('password')"></span>
                    <p class="control">
                        <button class="button is-success" @click="onSubmit">
                        Login
                        </button>
                    </p>
                </div>
                <div class="column login-right-background">
                    {{--背景BackGround--}}
                </div>
            </div>
        </div>
    </section>

@endsection




