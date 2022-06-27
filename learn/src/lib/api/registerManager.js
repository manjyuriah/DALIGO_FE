import axios from 'axios';

function registerProcess(_nickname, _age, _area, _setState) {
    //닉네임, 나이대, 지역구, setState 콜백함수

    axios({
        method: 'post',
        url: '/register',
        data: {
            nickname: _nickname,
            age: _age,
            area, _area
        }
    })
    .then(res => {
        _setState(res.data.registered);
    })
    .cathch(err => {
        console.error(err);
    });
}

export { registerProcess };