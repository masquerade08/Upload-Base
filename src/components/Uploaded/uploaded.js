import React,{useState,useEffect} from 'react'
import "./uploaded.css"
import data from "../../data/data.json"
export default function Uploaded() {
  
    const [jsonData, setJsonData] = useState([]);

    useEffect(() => {
        setJsonData(data)
    }, []);

    const handleTagSelect = (index, event) => {
        const selectedTag = event.target.value;
        setJsonData(prevData => {
            const newData = [...prevData];
            const newSelectedTags = [...newData[index].selectedTags];
    
            // Check if the tag is not already selected
            if (!newSelectedTags.includes(selectedTag)) {
                newSelectedTags.push(selectedTag);
                newData[index].selectedTags = newSelectedTags;
    
                // Remove the selected tag from the available tags
                newData[index].tags = newData[index].tags.filter(tag => tag !== selectedTag);
            }
    
            return newData;
        });
    };

    const handleRemoveTag = (index, tagToRemove) => {
        setJsonData(prevData => {
            const newData = [...prevData];
            const newSelectedTags = [...newData[index].selectedTags];
            const newTags = [...newData[index].tags];
    
            // Remove the tag from the selected tags list
            const updatedSelectedTags = newSelectedTags.filter(tag => tag !== tagToRemove);
            
            // Check if the tag is not already in the tags list before adding
            if (!newTags.includes(tagToRemove)) {
                newTags.push(tagToRemove);
            }
    
            newData[index].selectedTags = updatedSelectedTags;
            newData[index].tags = newTags;
    
            return newData;
        });
    };
    return (
        <div className='uploaded-cont'>
            <h2>Uploads</h2>
            <div className='upload-data'>

            
                <div className='head-cont'>
                <div className='sr-no' id='head'>Sl. No.</div>
                <div className='links'id='head'>Links</div>
                <div className='prefix'id='head'>Prefix</div>
                <div className='tags'id='head'>Add Tags</div>
                <div className='sel-tags'id='head'>Selected Tags</div>
                </div>
                <div >
                    {jsonData.map((item, index) => (
                        <div className='upload-row' key={item.id}>
                            <div className='sr-no'>
                                {item.id}
                            </div>
                            <div className='links'>
                            <a href={item.links}>{item.links}</a>
                                  </div>

                            <div className='prefix'>
                               {item.prefix}
                            </div>
                            <div className='tags'>
                            <select onChange={(event) => handleTagSelect(index, event)} className='tags-div'>
                                    <option value="">Select Tags</option>
                                    {item.tags.map(tag => (
                                        <option key={tag} value={tag}>{tag}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='sel-tags'>
                            {item.selectedTags.map(tag => (
                            <div key={tag} className='selected'>
                              <div className="tag-text">{tag}</div>
                          <div className="remove-button">
                <button onClick={() => handleRemoveTag(index, tag)} className="remove-tag">X</button>
            </div>
        </div>
    ))}
</div>

                            

                        

                        
                        </div>
                    ))}
                </div>
                </div>
        </div>
    );
}

