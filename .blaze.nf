@version 1.0

@extends("layouts.app")

@title("Web4 Platform")

@description("
The next-generation AI, Blockchain and Developer Platform.
")

@section(hero)

hero {

    title: "Build the Future"

    subtitle: "AI • Blockchain • Cloud • APIs"

    action {
        text: "Get Started"
        url: "/docs"
    }

    action {
        text: "GitHub"
        url: "/github"
    }

}

@endsection

@section(content)

container {

    grid(columns:3)

    card {

        icon: "🤖"

        title: "Artificial Intelligence"

        description:
        "Powerful AI APIs and models."

        button {
            text:"Explore"
            url:"/ai"
        }

    }

    card {

        icon:"⛓"

        title:"Blockchain"

        description:
        "Build decentralized applications."

        button {

            text:"Learn More"

            url:"/blockchain"

        }

    }

    card {

        icon:"⚡"

        title:"Developer APIs"

        description:
        "REST, GraphQL and WebSocket."

        button {

            text:"Documentation"

            url:"/api"

        }

    }

}

@endsection
@extends('layouts.app')

@section('title','Web4 Platform')

@section('hero')

<x-hero
    title="Build the Future"
    subtitle="AI • Blockchain • Cloud • APIs"
    primary-url="/docs"
    secondary-url="/github"
/>

@endsection

@section('content')

<div class="grid grid-cols-3 gap-8">

    <x-card
        icon="🤖"
        title="Artificial Intelligence"
        description="Powerful AI APIs and models."
        url="/ai"/>

    <x-card
        icon="⛓"
        title="Blockchain"
        description="Build decentralized applications."
        url="/blockchain"/>

    <x-card
        icon="⚡"
        title="Developer APIs"
        description="REST, GraphQL and WebSocket."
        url="/api"/>

</div>

@endsection
