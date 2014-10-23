<!doctype html>
<html>
<head>
    <meta charset="utf-8" />
    <title>{{ title }}</title>

</head>

<body>

<form action="/signup" method="post">
   <input type="text" name="username">Username<br>
   <input type="password" name="password">Password<br> 
   <input type="password" name="passwordConfirm">Re-enter password <br>
  <input type="submit" value="post">
</form>

</body>
</html>