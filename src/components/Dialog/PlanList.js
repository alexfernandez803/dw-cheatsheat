import React, { useState } from 'react'
import Plan from "./Plan";
const PlanList = () => {
    
    const [selected, setSelected] = useState('monthly-one-dollar')
    const onSelectPlan = (plan) => {
        setSelected(plan)
    }

    return (
        <div className="flex flex-wrap items-center justify-center py-4 pt-0">
            <Plan name="monthly-one-dollar" isActive={selected === 'monthly-one-dollar'} price={1.99}
             onSelected={onSelectPlan}
             description="* Recurring monthly payment, cancel anytime." />
            <Plan name="yearly-10-dollar" mode="yearly" 
             isActive={selected === 'yearly-10-dollar'}  price={9.99}  onSelected={onSelectPlan} 
             description="* Recurring yearly payment, cancel anytime. Save 20%"
             />
        </div>

    )

}

export default PlanList