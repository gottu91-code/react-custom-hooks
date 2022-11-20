import { useState } from "react"

const memberList = [
    {
      'id': 1,
      'firstname': '勤',
      'lastname': '主田',
      'age': 24,
    },
    {
      'id': 2,
      'firstname': '未来',
      'lastname': '先岡',
      'age': 28,
    },
    {
      'id': 3,
      'firstname': '一郎',
      'lastname': '後藤',
      'age': 23,
    },
  ]

export const useFetchUsers = () => {
    const [userList, setUserList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const onClickFetchUser = () => {
        setIsLoading(true);
        setIsError(false);

        setTimeout(() => {
            const users = memberList.map(user => ({
                id: user.id,
                name: `${user.lastname} ${user.firstname}`,
                age: user.age,
            }));
            setUserList(users);
            setIsLoading(false);
        }, 1000);
    }

    // まとめて返却したいのでオブジェクトに設定する
    return { userList, isLoading, isError, onClickFetchUser };
}