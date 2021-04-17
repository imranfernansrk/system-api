import { Dispatch, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompaniesDatas } from "../../actions";

import { Table } from "react-bootstrap"
import { SystemAPIModels } from "../../models";


const Companies = () => {
    const actionDispatch = useDispatch<Dispatch<any>>();
    const companiesData: any = useSelector<SystemAPIModels.RootState>(state=>state.companies);

    useEffect(() => {
        // actionDispatch(fetchCompaniesDatas());
    }, [])

    return (
        <div>
                {
                        companiesData.error ? (<div>Errors Occured</div>) :
                            (
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>User Id</th>
                                            <th>To-Do</th>
                                            <th>Completed</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            companiesData && companiesData.data.map(
                                                (todo: any) =>
                                                    <tr key={todo.id} onClick={() => {}}>
                                                        <td>{todo.id}</td>
                                                        <td>{todo.userId}</td>
                                                        <td>{todo.title}</td>
                                                        <td>{todo.completed.toString()}</td>
                                                    </tr>)
                                        }
                                    </tbody>
                                </Table>
                            )
                }
        </div>
    )

}
export default Companies;