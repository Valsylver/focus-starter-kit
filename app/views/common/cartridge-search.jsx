// Components

const QuickSearch = FocusComponents.search.searchBar.component;

// Mixins

const i18nMixin = FocusComponents.common.i18n.mixin;

const CartridgeSearch = React.createClass({
    displayName: 'CartridgeSearch',
    mixins: [i18nMixin],
    render() {
        return (
            <div className='cartridge-search'>
                <h1>{this.i18n('search.cartridge.title')}</h1>
                <QuickSearch />
            </div>
        );
    }
});

module.exports = CartridgeSearch;
