import Card from "./card"
import './price.css';
function Price(){
    let mycard = [
        {
            plan: "FREE",
            currancy: "$",
            price: "0",
            period: "Month",
            offers:[
                {
                    name: "Single User",
                    isEnabled: true,
                },
                {
                    name: "5GB Storage",
                    isEnabled: true,
                },
                {
                    name: "Unlimited Public Projects",
                    isEnabled: true,
                },
                {
                    name: "Community Access",
                    isEnabled: true,
                },
                {
                    name: "Unlimited Private Projects",
                    isEnabled: false,
                },
                {
                    name: "Dedicated Phone Support",
                    isEnabled: false,
                },
                {
                    name: "Free Subdomain",
                    isEnabled: false,
                },
                {
                    name: "Monthly Status Report",
                    isEnabled: false,
                }
            ]
        },
        {
            plan: "PLUS",
            currancy: "$",
            price: "9",
            period: "Month",
            offers:[
                {
                    name: "5 Users",
                    isEnabled: true,
                },
                {
                    name: "50GB Storage",
                    isEnabled: true,
                },
                {
                    name: "Unlimited Public Projects",
                    isEnabled: true,
                },
                {
                    name: "Community Access",
                    isEnabled: true,
                },
                {
                    name: "Unlimited Private Projects",
                    isEnabled: true,
                },
                {
                    name: "Dedicated Phone Support",
                    isEnabled: true,
                },
                {
                    name: "Free Subdomain",
                    isEnabled: true,
                },
                {
                    name: "Monthly Status Report",
                    isEnabled: false,
                }
            ]
        },
        {
            plan: "PRO",
            currancy: "$",
            price: "49",
            period: "Month",
            offers:[
                {
                    name: "Unlimited Users",
                    isEnabled: true,
                },
                {
                    name: "150GB Storage",
                    isEnabled: true,
                },
                {
                    name: "Unlimited Public Projects",
                    isEnabled: true,
                },
                {
                    name: "Community Access",
                    isEnabled: true,
                },
                {
                    name: "Unlimited Private Projects",
                    isEnabled: true,
                },
                {
                    name: "Dedicated Phone Support",
                    isEnabled: true,
                },
                {
                    name: "Unlimited Free Subdomains",
                    isEnabled: true,
                },
                {
                    name: "Monthly Status Report",
                    isEnabled: true,
                }
            ]
        }
        
    ]
    return <>
    <section className="pricing py-5">
        <div className="container">
            <div className="row">
            {
                mycard.map((obj)=>{
                    return <>
                    <Card data={obj}></Card>  
                    </>;
                })
            }
            </div>
        </div>
    </section>        
    </>;
}

export default Price;