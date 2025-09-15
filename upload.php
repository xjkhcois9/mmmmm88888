<?php
$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
    echo "تم رفع الملف بنجاح: " . htmlspecialchars(basename($_FILES["fileToUpload"]["name"]));
} else {
    echo "عذراً، حدث خطأ أثناء رفع الملف.";
}
?>