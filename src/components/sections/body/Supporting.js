import React from 'react';
import { Button, ParagraphText, SectionTitle } from '../../widgets';
import supporting from '../../../data/supportedFileTypes.json';

function Supporting() {
    let totalSupports = 0;
    const vendors = [];
    const fileTypes = [];
    const extByTypes = {};

    supporting.forEach((vendor, vIndex) => {
        const vendorName = Object.keys(vendor)[0];
        const vendorTypes = vendor[vendorName];
        vendors.push(vendorName);
        fileTypes[vIndex] = [];

        vendorTypes.forEach((type, tIndex) => {
            const typeName = Object.keys(type)[0]
            const extensions = type[typeName];
            fileTypes[vIndex].push(typeName);
            extByTypes[vendorName + '-' + typeName] = extensions;

            extensions.forEach((extension, eIndex) => {
                totalSupports++;
            })
        })
    });

    const rows = vendors.map((vendor, vIndex) => {
        const types = fileTypes[vIndex];
        const typesCell = types.map((type, tIndex) => <li key={`t${tIndex}`}>{type}</li>);

        const extensionsCell = types.map((type, tIndex) => {
            const key = vendor + '-' + type;
            const extensionsByType = extByTypes[key]
            return <li key={`e${tIndex}`}>{extensionsByType.join(', ')}</li>
        });

        return <div className='table-row' key={`v${vIndex}`}>
            <div className='table-row-cell'>{vendor}</div>
            <div className='table-row-cell'><ul>{typesCell}</ul></div>
            <div className='table-row-cell'><ul>{extensionsCell}</ul></div>
        </div>
    })

    return <div className='supporting-triangle'>
        <section className="supporting">
            <div className="container">
                <SectionTitle>Glasswall Supports the Following Files Types</SectionTitle>
                <ParagraphText context="supporting">The Glasswall process can be applied the following <span
                    className="text-highlighted">{totalSupports}</span> File types.</ParagraphText>
                <div className='supporting-table'>
                    <div className="table-placeholder">
                        <div className='table-header'>
                            <div className='table-header-cell'>Category</div>
                            <div className='table-header-cell'>File Type</div>
                            <div className='table-header-cell'>Extensions</div>
                        </div>
                        {rows}
                    </div>
                </div>
                <div className="supporting-buttons">
                    <Button inverse>LEARN MORE</Button>
                </div>

            </div>
        </section>
    </div>
}

export default Supporting
