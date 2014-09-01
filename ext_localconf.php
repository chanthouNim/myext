<?php

if (!defined('TYPO3_MODE')) {
	die('Access denied.');
}

$extensionPath = \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::extPath('myext');


\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:myext/Configuration/TSConfig/Page.ts">');
?>