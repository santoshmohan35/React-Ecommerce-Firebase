import React from 'react';
import './preview-collection.styles.css';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items }) => (
    <div>
        <h2 className="mt-3">{title}</h2>
        <div className="row">
            {items.filter((item, idx) => idx < 4).map(({ id, ...itemProps }) => (
                <CollectionItem key={id}{...itemProps} />
            ))
            }
        </div>
    </div>
)

export default CollectionPreview;