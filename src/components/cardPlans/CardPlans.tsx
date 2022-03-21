import clsx from "clsx";
import { ReactNode } from "react";
import { MdOutlineSecurity } from "react-icons/md";
import { ButtonCta } from "../buttonCta/ButtonCta";

export type Plan = {
  qtd: number;
  price: string;
  price_unit: string;
};
type CardPlansProps = {
  plan: Plan;
};

export const CardPlans = (props: CardPlansProps) => {
  const { plan } = props;
  return (
    <li className={clsx(
      "rounded",
      "bg-gray-500",
      "p-4 space-y-4 flex flex-col items-center justify-center",
      "group hover:shadow-xl cursor-pointer",
      "text-white"
    )} >
      <div className="w-full  text-center">
        <h2 className="text-3xl font-bold">{plan.qtd} Créditos</h2>
      </div>
      <div className="bg-white w-full h-0.5"/>
      <div className="">
        <span className="bg-gray-600 shadow px-16 py-2 rounded-lg  text-lg font-bold">R$ {plan.price}</span>
      </div>

      <div className="py-4">
        <span className="text-6xl font-bold">{plan.price_unit}</span>
        <span className="">/cada</span>
      </div>

      <div>
        <span className="text-center">Liberação do painel é imediata.</span>
      </div>
      
      <ButtonCta>Quero esse</ButtonCta>

     
    </li >
  );
};