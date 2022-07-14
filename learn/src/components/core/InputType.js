import { useState, useRef } from "react";

const InputType = () => {

    const [inputs, setInputs] = useState({
        name:'',
        nickname:'', //다른 값으로 수정가능함.
    });
    
    const nameInput = useRef();

    const { name, nickname } = inputs; // 할당을 통해 값 추출

    const onChange = e => {
        const { value, name } = e.target; //e.target에서 name과 value 를 추출
        setInputs({
            ...inputs, //기존의 input 객체를 복사한 뒤
            [name]: value //name 키를 가진 값을 value 로 설정
        });
    };
    //초기화 설정
    const onReset = () => {
        setInputs({
            name:'',
            nickname:'',
        });
        nameInput.current.focus(); //DOM API 호출
    };

    return(
        <>
            <div>
                <input type="text" name="name" placeholder="이름" onChange={onChange} value={name} />
                <input type="text" name="nickname" placeholder="닉네임" onChange={onChange} value={nickname} />
                <button onClick={onReset}>초기화</button>

                <div>
                    <b>값: </b> {/*없애도 상관없음.*/}
                    {name} ({nickname}) 
                </div>
            </div>
        </>
    );
}

export default InputType;