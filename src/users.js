import REACT,{useContext} from 'react';
import Createuser from './createuser';
import { Link } from 'react-router-dom';
import UserContext from './usercontext';
import Edituser from './edituser';
function Users() {
    let users=useContext(UserContext);
    
    
    return (
        <>
            <div class="container-fluid">
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                        <Link to="/createuser"> <button type="button" class="btn btn-primary float-right">
                            Create User
                </button></Link>
                    </div>

                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Age</th>
                                        <th>Start date</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Age</th>
                                        <th>Start date</th>
                                        <th>Action</th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                    {
                                        users.existUser.map((users)=>{
                                            return <tr>
                                           
                                            <td>{users.userName}</td>
                                            <td>{users.userEmail}</td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>
                                                
                                                 <Link to={`/edituser/${users.userId}`}> <button type="button" class="btn btn-primary">
                                                Edit User
                    </button></Link>
                    
                                                
                    </td>
                                        </tr>
                                        
                                        })
                                    
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Users;