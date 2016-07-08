<?php
/**
 * Foss4G-PDX Theme FUNctions
 *
 * These are built for fun. So ... have some!
 * Don't edit this file unless you know what you are doing.
 * Please use the .php files within the /functions directory to add functionality.
**/

/* Defining the functions directory */
define("FUN", get_template_directory() . "/includes/functions");

/* Bring those files into this file, which is automatically read by Wordpress */
require_once FUN . "/wp_bootstrap_navwalker.php";
require_once FUN . "/general.php";
require_once FUN . "/widgets.php";
require_once FUN . "/customizer.php";
require_once FUN . "/speakers.php";
require_once FUN . "/sponsors.php";
require_once FUN . "/conference-session-types.php";
require_once FUN . "/posts.php";
require_once FUN . "/slides.php";
require_once FUN . "/excerpt.php";
require_once FUN . "/grant_request.php";
require_once FUN . "/sponsor_sorting.php";
require_once FUN . "/schedule.php";

/* Do not add anything beneath this line! Else the world crumbles */
