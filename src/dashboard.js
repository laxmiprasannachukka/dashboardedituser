import REACT,{useContext} from 'react';
import Notification from './notification';


function Dashboard(){
   
    let notificationcard=[
        {
            Cardtitle:"EARNINGS (MONTHLY)",
            value:"40000",
            currency:"$",
            color:"primary",
            icon:"fa-calendar",
            isprogress:false
        },
        {
            Cardtitle:"EARNINGS (ANNUAL)",
            value:"215,000",
            currency:"$",
            color:"success",
            icon:"fa-dollar-sign",
            isprogress:false
        },
        {
            Cardtitle:"TASKS",
            value:"50",
            color:"info",
            icon:"fa-clipboard-list",
            isprogress:true
        },
        {
            Cardtitle:"PENDING REQUESTS",
            value:"18",
            color:"warning",
            icon:"fa-comments",
            isprogress:false
        }
        
    ]
    return (<>
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
    <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
            class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
</div>
<div class="row">
{
    notificationcard.map((card)=>{
return <Notification data={card}></Notification>
    })
}
</div>
</>);
}

export default Dashboard;