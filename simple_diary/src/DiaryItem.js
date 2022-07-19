import React, { useContext, useRef, useState } from 'react';
import { DiaryDispatchContext } from './App';

const DiaryItem = ({ author, content, emotion, create_date, id }) => {

    const {onEdit,onRemove} = useContext(DiaryDispatchContext);

    const handleRemove = () => {
        if(window.confirm(`${id+1}번째 일기를 정말 삭제하시겠습니까?`)){
            onRemove(id);
        };
    }

    const [isEdit, setIsEdit] = useState(false);
    const localContentInput = useRef();
    const [localContent, setLocalContent] = useState(content);
    const toggleIsEdit = () => {
        setLocalContent(content);
        setIsEdit(!isEdit);
    }

    const handleEdit = () => {
        if(localContent.length < 5){
            localContentInput.current.focus();
            return
        }
        if(window.confirm(`${id+1}번째 일기를 수정하시겠습니까?`)){
            onEdit(id, localContent);
            console.log(localContent);
            toggleIsEdit();
        }
    }
    

    return (
        <div className='DiaryItem'>
            <div className='info'>
                <span>작성자 : {author} | 감정점수 : {emotion}</span>
                <br />
                <span className='date'>{new Date(create_date).toLocaleString()}</span>
            </div>
            <div className='content'>
                {isEdit ?
                    (<><textarea ref={localContentInput} value={localContent} onChange={(e) => setLocalContent(e.target.value)}/></>) : 
                    (<>{content}</>)
                }
            </div> 
            {isEdit ? 
                <>
                    <button onClick={toggleIsEdit}>수정취소</button>
                    <button onClick={handleEdit}>수정완료</button>
                </> 
                :
                <>
                    <button onClick={handleRemove}>삭제하기</button>
                    <button onClick={toggleIsEdit}>수정하기</button>
                </>
            }
        </div>
    );
};

export default React.memo(DiaryItem);