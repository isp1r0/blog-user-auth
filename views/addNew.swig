<!doctype html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="/public/css/new.css">
    <meta charset="utf-8" />
    <title>{{ title }}</title>

</head>

<body>

<form action="/addNew" method="post">
  First name: <input type="text" name="fname" placeholder="{{author}}"><br>
  Last name: <textarea cols="40" rows="5" type="text" name="lname"></textarea><br>
  <input type="submit" value="Publish">
</form>

</body>
</html>