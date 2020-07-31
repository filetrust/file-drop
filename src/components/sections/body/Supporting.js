import React from 'react';
import { Button, ParagraphText, SectionTitle } from '../../widgets';
import supporting from '../../../data/supportedFileTypes.json';
import tableFormatting from '../../../data/supportedTableFormatting.json';

function Supporting() {

    function getTotalSupports () {
        const structure = supporting.mobile;
        let tally = 0;
        structure.forEach((categoryType) => {
            categoryType.forEach(category => {
                const categoryName = Object.keys(category)[0];
                const extensions = category[categoryName];
                extensions.forEach((extension, eIndex) => {
                    tally++;
                })

            })
        });
        return tally;
    }

    function getRows(scheme) {
        let rows;
        const structure = supporting[scheme];
        const categories = [];
        const fileTypes = [];
        const extensionsByTypes = {};

        if ( scheme === 'browser' ) {
            structure.forEach((category, vIndex) => {
                const categoryName = Object.keys(category)[0];
                const categoryTypes = category[categoryName];
                categories.push(categoryName);
                fileTypes[vIndex] = [];

                categoryTypes.forEach((type, tIndex) => {
                    const typeName = Object.keys(type)[0]
                    const extensions = type[typeName];
                    fileTypes[vIndex].push(typeName);
                    extensionsByTypes[categoryName + '-' + typeName] = extensions;
                })
            });

            rows = categories.map((category, vIndex) => {
                const types = fileTypes[vIndex];
                const typesCell = types.map((type, tIndex) => <li key={`t${tIndex}`}>{type}</li>);

                const extensionsCell = types.map((type, tIndex) => {
                    const key = category + '-' + type;
                    const extensionsByType = extensionsByTypes[key]
                    return <li key={`e${tIndex}`}>{extensionsByType.join(', ')}</li>
                });

                return <div className='table-row' key={`v${vIndex}`}>
                    <div className='table-row-cell'>{category}</div>
                    <div className='table-row-cell'>
                        <ul>{typesCell}</ul>
                    </div>
                    <div className='table-row-cell'>
                        <ul>{extensionsCell}</ul>
                    </div>
                </div>
            })
        } else {
            structure.forEach((categoryType, tIndex) => {
                categoryType.forEach((category, cIndex) => {
                    const categoryName = Object.keys(category)[0];
                    // setBottomBoundary;
                    if (cIndex === categoryType.length - 1) {
                        categories.push(categoryName);
                    }

                    fileTypes.push(categoryName);
                    extensionsByTypes[categoryName] = category[categoryName];

                })
            });

            rows = fileTypes.map((fileType, ftIndex) => {
                let boundaryClassName = '';
                if (categories[0] === fileType) {
                    boundaryClassName = ' bottom-border'
                    categories.shift();
                }
                return <div className={`table-row${boundaryClassName}`} key={`ft${ftIndex}`}>
                    <div className='table-row-cell'>
                        <ul><li>{fileType}</li></ul>
                    </div>
                    <div className='table-row-cell'>
                        <ul>{extensionsByTypes[fileType].join(', ')}</ul>
                    </div>
                </div>
            })
        }

        return rows;
    }

    return <div className='supporting-triangle'>
        <section className="supporting" id="supporting">
            <div className="container">
                <SectionTitle>Supported File Types</SectionTitle>
                <ParagraphText context="supporting">The Glasswall process can be applied the following <span
                    className="text-highlighted">{getTotalSupports()}</span> File types.</ParagraphText>
                {Object.keys(tableFormatting).map( (scheme) => {
                    const headers = tableFormatting[scheme]
                    const headerCells = headers.map( (header, hIndex) => <div key={`${scheme}-${hIndex}`} className='table-header-cell'>{header}</div>)
                    return (
                        <div key={`${scheme}`} className={`supporting-table ${scheme}`}>
                            <div className="table-placeholder">
                                <div className='table-header'>
                                    {headerCells}
                                </div>
                                {getRows(scheme)}
                            </div>
                        </div>
                    )
                })}

            </div>
        </section>
    </div>
}

export default Supporting
