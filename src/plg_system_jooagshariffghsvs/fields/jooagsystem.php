<?php
/**
 * @package     Joomla.Platform
 * @subpackage  Form
 *
 * @copyright   Copyright (C) 2005 - 2015 Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE
 */

  /**
 * @modified   for JooAg Shariff
 * @author     Joomla Agentur <Ufuk Avcu> <info@joomla-agentur.de>
 * @link       https://joomla-agentur.de
 **/

defined('_JEXEC') or die;

/**
 * Form Field class for the Joomla Platform.
 * Provides spacer markup to be used in form layouts.
 *
 * @since  11.1
 */
class JFormFieldJooagsystem extends JFormField
{
	/**
	 * The form field type.
	 *
	 * @var    string
	 * @since  11.1
	 */
	protected $type = 'JooagSystem';

	/**
	 * Method to get the field input markup for a spacer.
	 * The spacer does not have accept input.
	 *
	 * @return  string  The field input markup.
	 *
	 * @since   11.1
	 */
	protected function getInput()
	{
		return;
	}

	/**
	 * Method to get the field label markup for a spacer.
	 * Use the label text or name from the XML element as the spacer or
	 * Use a hr="true" to automatically generate plain hr markup
	 *
	 * @return  string  The field label markup.
	 *
	 * @since   11.1
	 */
	protected function getLabel()
	{
		$doc = JFactory::getDocument();
		$style = '';
		$style .= '.jooag-line{width:400px;height:2px;background:#ccc;}';
		$style .= '.alert{width:350px;}';
		$doc->addStyleDeclaration( $style );
	}
}
