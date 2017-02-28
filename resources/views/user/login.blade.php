@extends('layout')

@section('title','login')


@section('content')
    <section class="section">
        <div class="container">




            <div class="columns">
                <div class="column">
                    <label class="label">Name</label>
                    <p class="control has-icon">
                        <input class="input" type="email" placeholder="Email">
                        <span class="icon is-small">
            <i class="fa fa-envelope"></i>
             </span>
                    </p>
                    <label class="label">Password</label>
                    <p class="control has-icon">
                        <input class="input" type="password" placeholder="Password">
                        <span class="icon is-small">
             <i class="fa fa-lock"></i>
            </span>
                    </p>
                    <p class="control">
                        <button class="button is-success">
                            Login
                        </button>
                    </p>
                </div>
                <div class="column login-right-background">
                    {{--背景--}}
                </div>
            </div>




        </div>
    </section>

@endsection


<script>



</script>

