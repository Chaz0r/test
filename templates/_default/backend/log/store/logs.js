/**
 * Shopware 4.0
 * Copyright © 2012 shopware AG
 *
 * According to our dual licensing model, this program can be used either
 * under the terms of the GNU Affero General Public License, version 3,
 * or under a proprietary license.
 *
 * The texts of the GNU Affero General Public License with an additional
 * permission and of our proprietary license can be found at and
 * in the LICENSE file you have received along with this program.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * "Shopware" is a registered trademark of shopware AG.
 * The licensing of the program under the AGPLv3 does not imply a
 * trademark license. Therefore any rights, title and interest in
 * our trademarks remain entirely with us.
 *
 * @category   Shopware
 * @package    Log
 * @subpackage Store
 * @copyright  Copyright (c) 2012, shopware AG (http://www.shopware.de)
 * @version    $Id$
 * @author shopware AG
 */

/**
 * Shopware - Logs store
 *
 * This store contains all logs.
 */
//{block name="backend/log/store/logs"}
Ext.define('Shopware.apps.Log.store.Logs', {

    /**
    * Extend for the standard ExtJS 4
    * @string
    */
    extend: 'Ext.data.Store',
    /**
    * Auto load the store after the component
    * is initialized
    * @boolean
    */
    autoLoad: false,
    /**
    * Amount of data loaded at once
    * @integer
    */
    pageSize: 20,
    remoteFilter: true,
    remoteSort: true,
    /**
    * Define the used model for this store
    * @string
    */
    model : 'Shopware.apps.Log.model.Log',

    // Default sorting for the store
    sortOnLoad: true,
    sorters: {
        property: 'date',
        direction: 'DESC'
    }
});
//{/block}