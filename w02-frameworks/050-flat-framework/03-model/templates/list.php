<!-- templates/list.php -->
<!DOCTYPE html>
<html>
<head>
    <title>List of Posts</title>
</head>
<body>
<h1>List of Posts</h1>
<ul>
    <?php foreach ($posts as $post): ?>
        <li>
            <a href="/show.php?id=<?= $post['id'] ?>">
                <?= $post['title'] ?>
            </a>
        </li>
    <?php endforeach ?>
</ul>
</body>
</html>
<!-- // based on https://symfony.com/doc/current/introduction/from_flat_php_to_symfony.html -->
