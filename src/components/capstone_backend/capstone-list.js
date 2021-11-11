import React from 'react';

const CapstoneList = props => {

    const classList = props.data.map(classItem => {
        return (
            <div key={classItem.class_id}className="class-item-wrapper">
                <h3 className="class-item-id">{classItem.class_id}</h3>
                <h3 className="class-item-name">{classItem.class_name}</h3>
                <h3 className="class-item-description">{classItem.class_description}</h3>
            </div>
        )
    })
    return(
        <div>{classList}</div>
    )
}
export default CapstoneList;