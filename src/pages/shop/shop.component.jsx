import React from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview  from '../../components/preview-collection/preview-collection.component';

class ShopPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state;
        return(
            <div>
                { collections.map(({id, ...otherCollectinProps}) => (
                    <CollectionPreview key={id} {...otherCollectinProps}/>
                ))}
            </div>
        )
    }
}

export default ShopPage;