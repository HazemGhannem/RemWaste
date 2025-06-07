import React from 'react'
import Button from './Button';
import { CalendarIcon, CreditCardIcon, MapPinIcon, ShieldIcon, TrashIcon, TruckIcon } from '../assets/svgs';

const NavBar = () => {
  return (
    <div className="flex justify-center mb-8 overflow-x-auto">
      <div className="flex items-center space-x-4">
        <Button
          icon={<MapPinIcon className="w-6 h-6" />}
          label="Postcode"
          dividerColor="#0037C1"
        />
        <Button
          icon={<TrashIcon className="w-6 h-6" />}
          label="Waste Type"
          dividerColor="#2A2A2A"
        />
        <Button
          icon={<TruckIcon className="w-6 h-6" />}
          label="Select Skip"
          dividerColor="#2A2A2A"
        />
        <Button
          icon={<ShieldIcon className="w-6 h-6" />}
          label="Permit Check"
          disabled
          dividerColor="#2A2A2A"
        />
        <Button
          icon={<CalendarIcon className="w-6 h-6" />}
          label="Choose Date"
          disabled
          dividerColor="#2A2A2A"
        />
        <Button
          icon={<CreditCardIcon className="w-6 h-6" />}
          label="Payment"
          disabled
        />
      </div>
    </div>
  );
}

export default NavBar
