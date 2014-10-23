<!doctype html>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="/public/css/home.css">
    <meta charset="utf-8" />
    <title>{{ title }}</title>

</head>

<body>
    <h1 id="title">{{ title }}</h1>
    <p>{{ description }}</p>
    <ul>
	{% for post in posts %}
		<li class="postlisting"><a href="/post/{{ post.firstName }}">{{ post.firstName }}</a></li>
        <a href="/post/{{ post.firstName }}/delete">DELETE</a>
	{% endfor %}
    </ul>
    {% if auth == true %}
    <button><a href="/addNew">Add new post</a></button>
    <button><a href="/logout">Log out</a></button>
    <form action="/deleteAccount" method="post">
    <input type="submit" value="DELETE ACCOUNT?"></form>
    {% else %}
    <button><a href="/signup">Sign up!</a></button>
    <button><a href="/login">Log in</a></button>
    {% endif %}
</body>
</html>