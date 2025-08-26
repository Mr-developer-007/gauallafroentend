"use client";
import React, { useEffect, useState, useCallback } from "react";
import { 
  FaGreaterThan, 
  FaMapMarkerAlt, 
  FaCity, 
  FaGlobeAmericas, 
  FaHome, 
  FaCheckCircle, 
  FaEdit, 
  FaTrash, 
  FaPlus, 
  FaArrowLeft,
  FaExclamationTriangle,
  FaSpinner
} from 'react-icons/fa';
import { RiGovernmentFill } from 'react-icons/ri';
import { HiIdentification } from 'react-icons/hi';
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { baseurl, imageurl } from "./utlis/apis";

// Address Card Component
const AddressCard = ({ address, defaultAddress, setDefaultAddress, onEdit, onDelete, isSettingDefault }) => {
  const isDefault = defaultAddress?.id === address?.id;
  
  return (
    <div className={`border-2 rounded-xl p-5 mb-4 relative transition-all duration-300 ${isDefault ? 'border-green-500 bg-green-50 shadow-md' : 'border-gray-200 hover:border-blue-300 hover:shadow-sm'}`}>
      {isDefault && (
        <div className="absolute top-3 right-3 bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full flex items-center shadow-sm">
          <FaCheckCircle className="mr-1" /> Default
        </div>
      )}

      <div className="flex items-start mb-3">
        <div className="bg-blue-100 p-2 rounded-full mr-3">
          <FaMapMarkerAlt className="text-blue-600 text-lg" />
        </div>
        <div>
          <p className="font-semibold text-gray-800">{address.street}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
        <div className="flex items-center text-gray-600">
          <FaCity className="text-blue-400 mr-2" />
          <span className="text-sm">{address.city}</span>
        </div>

        <div className="flex items-center text-gray-600">
          <RiGovernmentFill className="text-purple-400 mr-2" />
          <span className="text-sm">{address.state}</span>
        </div>

        <div className="flex items-center text-gray-600">
          <HiIdentification className="text-orange-400 mr-2" />
          <span className="text-sm">{address.zip_code}</span>
        </div>

        <div className="flex items-center text-gray-600">
          <FaGlobeAmericas className="text-green-400 mr-2" />
          <span className="text-sm">{address.country}</span>
        </div>
      </div>

      <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-100">
        <div className="flex space-x-2">
          <button
            onClick={() => onEdit(address)}
            className="text-xs text-blue-600 hover:text-blue-800 flex items-center transition-colors"
            disabled={isSettingDefault === address.id}
          >
            <FaEdit className="mr-1" /> Edit
          </button>
          <button
            onClick={() => onDelete(address.id)}
            className="text-xs text-red-600 hover:text-red-800 flex items-center transition-colors"
            disabled={isSettingDefault === address.id}
          >
            <FaTrash className="mr-1" /> Delete
          </button>
        </div>

        <button
          onClick={() => setDefaultAddress(address)}
          className={`text-xs py-1 px-3 rounded-full flex items-center transition-colors ${isDefault
            ? 'bg-green-100 text-green-800 cursor-default'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          disabled={isDefault || isSettingDefault === address.id}
        >
          {isDefault ? 'Selected' : (isSettingDefault === address.id ? <FaSpinner className="animate-spin mr-1" /> : 'Select Address')}
        </button>
      </div>
    </div>
  );
};

// Address Form Component
const AddressForm = ({ 
  formData, 
  handleChange, 
  handleSubmit, 
  isSubmitting, 
  editingAddress, 
  onCancel 
}) => {
  return (
    <div className="bg-gray-50 p-5 rounded-xl">
      <button
        onClick={onCancel}
        className="mb-4 text-gray-600 hover:text-gray-800 flex items-center transition-colors"
      >
        <FaArrowLeft className="mr-2" /> Back to addresses
      </button>

      <h4 className="text-xl font-semibold mb-5 text-gray-800">
        {editingAddress ? 'Edit Address' : 'Add New Address'}
      </h4>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaHome className="text-gray-400" />
          </div>
          <input
            type="text"
            name="street"
            value={formData.street}
            onChange={handleChange}
            placeholder="Street Address"
            className="pl-10 w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 border"
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaCity className="text-gray-400" />
          </div>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            className="pl-10 w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 border"
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <RiGovernmentFill className="text-gray-400" />
            </div>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="State"
              className="pl-10 w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 border"
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <HiIdentification className="text-gray-400" />
            </div>
            <input
              type="text"
              name="zip_code"
              value={formData.zip_code}
              onChange={handleChange}
              placeholder="ZIP Code"
              className="pl-10 w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 border"
              required
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaGlobeAmericas className="text-gray-400" />
          </div>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="pl-10 w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 border appearance-none bg-white"
            required
            disabled={isSubmitting}
          >
            <option value="India">India</option>
            <option value="USA">United States</option>
            <option value="UK">United Kingdom</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
          </select>
        </div>

        <div className="flex justify-between pt-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-2.5 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors flex items-center shadow-md"
          >
            {isSubmitting ? <FaSpinner className="animate-spin mr-2" /> : null}
            {isSubmitting ? 'Saving...' : (editingAddress ? 'Update Address' : 'Save Address')}
          </button>
          <button
            type="button"
            onClick={onCancel}
            disabled={isSubmitting}
            className="bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 text-gray-700 py-2.5 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default function CheckOut() {
  const router = useRouter();
  const [showNewAddress, setShowNewAddress] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSettingDefault, setIsSettingDefault] = useState(null);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    street: '',
    city: '',
    state: '',
    zip_code: '',
    country: 'India'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddressSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    const site_user_id = localStorage.getItem("userid");

    try {
      let response;
      if (editingAddress) {
        response = await axios.put(`${baseurl}/address/${editingAddress.id}`, { ...formData, site_user_id });
      } else {
        response = await axios.post(`${baseurl}/addaddress`, { ...formData, site_user_id });
      }

      const data = response.data;
      if (data.success) {
        setShowNewAddress(false);
        setEditingAddress(null);
        setFormData({
          street: '',
          city: '',
          state: '',
          zip_code: '',
          country: 'India'
        });
        fetchaddress(site_user_id);
      } else {
        setError(data.message || 'Failed to save address');
      }
    } catch (error) {
      console.error("Error saving address:", error);
      setError('An error occurred while saving the address. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEditAddress = (address) => {
    setEditingAddress(address);
    setFormData({
      street: address.street,
      city: address.city,
      state: address.state,
      zip_code: address.zip_code,
      country: address.country
    });
    setShowNewAddress(true);
  };

  const handleDeleteAddress = async (id) => {
    if (window.confirm("Are you sure you want to delete this address?")) {
      try {
        const response = await axios.delete(`${baseurl}/address/${id}`);
        const data = response.data;
        if (data.success) {
          const site_user_id = localStorage.getItem("userid");
          fetchaddress(site_user_id);
        } else {
          setError(data.message || 'Failed to delete address');
        }
      } catch (error) {
        console.error("Error deleting address:", error);
        setError('An error occurred while deleting the address. Please try again.');
      }
    }
  };

  const [allAddress, setAllAddress] = useState([]);
  const [defaultAddress, setDefaultAddressState] = useState(null);
  const [order, setOrder] = useState({});
  const [selectedFrequency, setSelectedFrequency] = useState('one_time');
  const [loading, setLoading] = useState(true);
  const [orderLoading, setOrderLoading] = useState(true);
  const [subscriptionDuration,setSubscriptionDuration]=useState("1")

  const fetchaddress = useCallback(async (id) => {
    try {
      const response = await axios.get(`${baseurl}/address/${id}`);
      const data = response.data;
      if (data.success) {
        setAllAddress(data.allAddress || []);
        const defaultadd = data.allAddress?.filter((item) => item.is_default == 1);
        setDefaultAddressState(defaultadd.length > 0 ? defaultadd[0] : null);
      } else {
        setError(data.message || 'Failed to fetch addresses');
      }
    } catch (error) {
      console.error("Error fetching addresses:", error);
      setError('An error occurred while fetching addresses. Please try again.');
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchcartdata = useCallback(async (id) => {
    try {
      const response = await axios.get(`${baseurl}/getcartitem/${id}`);
      const data = await response.data;
      if (data.success) {
        setOrder(data.product);
      } else {
        setError(data.message || 'Failed to fetch order details');
      }
    } catch (error) {
      console.error("Error fetching cart data:", error);
      setError('An error occurred while fetching order details. Please try again.');
    } finally {
      setOrderLoading(false);
    }
  }, []);

  const setDefaultAddress = async (address) => {
    setIsSettingDefault(address.id);
    setError('');
    const site_user_id = localStorage.getItem("userid");
    
    try {
      const response = await axios.put(`${baseurl}/address/${address.id}`, {
        ...address,
        site_user_id,
        is_default: 1
      });
      
      const data = response.data;
      if (data.success) {
        fetchaddress(site_user_id);
      } else {
        setError(data.message || 'Failed to set default address');
      }
    } catch (error) {
      console.error("Error setting default address:", error);
      setError('An error occurred while setting the default address. Please try again.');
    } finally {
      setIsSettingDefault(null);
    }
  };

  useEffect(() => {
    const cartid = localStorage.getItem("buyitem");
    const site_user_id = localStorage.getItem("userid");

    if (!site_user_id) {
      router.push("/login");
      return;
    }

    fetchaddress(site_user_id);

    if (!cartid) {
      router.push("/");
    } else {
      fetchcartdata(cartid);
    }
  }, [fetchaddress, fetchcartdata, router]);

  const handlePlaceOrder = async () => {
    if (!defaultAddress) {
      setError("Please select a delivery address");
      return;
    }

    try {
      // Here you would implement the actual order placement
      // For now, we'll simulate a successful order
      alert("Order placed successfully!");
      router.push("/order-confirmation");
    } catch (error) {
      console.error("Error placing order:", error);
      setError('An error occurred while placing your order. Please try again.');
    }
  };

  const handleCancelForm = () => {
    setShowNewAddress(false);
    setEditingAddress(null);
    setFormData({
      street: '',
      city: '',
      state: '',
      zip_code: '',
      country: 'India'
    });
  };







  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative text-white">
        <div className="bg-cover bg-center bg-no-repeat relative bg-[url('/img/heroSection/2swiper.webp')] h-[20vh] lg:h-[40vh] flex flex-col justify-center items-center">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative text-center px-6 md:px-16 xl:px-40">
            <h1 className="text-4xl md:text-5xl lg:text-6xl uppercase font-bold tracking-wide">Checkout</h1>
            <div className="flex items-center justify-center gap-x-2 mt-4 text-sm md:text-base">
              <Link href="/" className="hover:text-gray-300 transition">Home</Link>
              <FaGreaterThan className="text-xs opacity-70" />
              <span className="font-medium">Checkout</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-5 md:px-12 xl:px-32 py-10 lg:py-16">
        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center">
            <FaExclamationTriangle className="mr-2" />
            {error}
            <button 
              onClick={() => setError('')} 
              className="ml-auto text-red-800 hover:text-red-900"
            >
              &times;
            </button>
          </div>
        )}

        <div className="grid lg:grid-cols-3 lg:gap-x-8 gap-y-8">
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 border-b pb-4 mb-6 flex items-center">
                <FaMapMarkerAlt className="mr-3 text-blue-500" />
                Delivery Address
              </h3>

              {!showNewAddress ? (
                <>
                  <button
                    onClick={() => setShowNewAddress(true)}
                    className="mb-6 bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-5 rounded-lg transition-colors flex items-center shadow-md hover:shadow-lg"
                  >
                    <FaPlus className="mr-2" /> Add New Address
                  </button>

                  {loading ? (
                    <div className="flex justify-center py-10">
                      <FaSpinner className="animate-spin text-2xl text-blue-500" />
                    </div>
                  ) : (
                    <div className="address-list">
                      {defaultAddress && (
                        <>
                          <h4 className="font-semibold mb-3 text-gray-700 text-lg">Default Address</h4>
                          <AddressCard
                            key={defaultAddress.id}
                            address={defaultAddress}
                            defaultAddress={defaultAddress}
                            setDefaultAddress={setDefaultAddress}
                            onEdit={handleEditAddress}
                            onDelete={handleDeleteAddress}
                            isSettingDefault={isSettingDefault}
                          />
                        </>
                      )}

                      {allAddress.filter(address => !address.is_default).length > 0 && (
                        <>
                          <h4 className="font-semibold mb-3 text-gray-700 text-lg mt-6">Other Addresses</h4>
                          {allAddress
                            .filter(address => address.id !== defaultAddress?.id)
                            .map(address => (
                              <AddressCard
                                key={address.id}
                                address={address}
                                defaultAddress={defaultAddress}
                                setDefaultAddress={setDefaultAddress}
                                onEdit={handleEditAddress}
                                onDelete={handleDeleteAddress}
                                isSettingDefault={isSettingDefault}
                              />
                            ))
                          }
                        </>
                      )}

                      {allAddress.length === 0 && (
                        <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-xl">
                          <FaMapMarkerAlt className="text-4xl text-gray-400 mx-auto mb-3" />
                          <p className="text-gray-500">No addresses saved yet.</p>
                          <p className="text-gray-400 text-sm mt-1">Please add an address to continue with your order.</p>
                        </div>
                      )}
                    </div>
                  )}
                </>
              ) : (
                <AddressForm
                  formData={formData}
                  handleChange={handleChange}
                  handleSubmit={handleAddressSubmit}
                  isSubmitting={isSubmitting}
                  editingAddress={editingAddress}
                  onCancel={handleCancelForm}
                />
              )}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 sticky top-6">
              <h3 className="text-2xl font-bold text-gray-800 border-b pb-4 mb-6 flex items-center">
                Order Summary
              </h3>
            
              {orderLoading ? (
                <div className="flex justify-center py-10">
                  <FaSpinner className="animate-spin text-2xl text-blue-500" />
                </div>
              ) : order?.product ? (
                <>
                  <div className="flex items-center mb-5 pb-4 border-b">
                    <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden mr-4">
                      <img
                        src={`${imageurl}/${order.product.images[0]}` || "/img/placeholder-product.jpg"}
                        alt={order.product.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = "/img/placeholder-product.jpg";
                        }}
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800">{order.product.name}</h4>
                      <p className="text-gray-600 text-sm mt-1">Quantity: {order.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-800">₹{parseFloat(order?.product?.price || 0).toFixed(2)}</p>
                    </div>
                  </div>

                  <div className="space-y-3 pb-4 border-b mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="text-gray-800">₹{parseFloat(order.price || 0).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span className="text-green-600 font-medium">Free</span>
                    </div>
                  </div>


                  {order.product.one_time ? (
                    <div className="mb-6">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg py-2 px-4 text-center">
                        <span className="text-blue-700 font-medium">One-time purchase</span>
                      </div>
                    </div>
                  ) : (
                    <div className="mb-6">
                      <p className="text-sm text-gray-600 mb-2">Select purchase option:</p>
                      <div className="flex space-x-2">
                        <button
                          onClick={() =>{ setSelectedFrequency('one_time'),setSubscriptionDuration('1')}}
                          className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors ${selectedFrequency === 'one_time'
                            ? 'bg-red-100 text-red-700 border border-red-300'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                        >
                          One Time
                        </button>
                        <button
                          onClick={() => setSelectedFrequency('subscription')}
                          className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors ${selectedFrequency === 'subscription'
                            ? 'bg-green-100 text-green-700 border border-green-300'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                        >
                          Subscribe
                        </button>
                      </div>
                    </div>
                  )}

                  {selectedFrequency === "subscription" && (
  <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
    <p className="text-sm font-medium text-gray-700 mb-3">Select subscription duration:</p>
    <div className="grid grid-cols-2 gap-3">
      <button
        className={`py-3 px-4 rounded-lg text-sm font-medium transition-all duration-200 flex flex-col items-center justify-center ${
          subscriptionDuration === '15'
            ? 'bg-blue-100 text-blue-700 border-2 border-blue-300 shadow-sm'
            : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-300 hover:bg-blue-50'
        }`}
        onClick={() => setSubscriptionDuration('15')}
      >
        <span className="font-semibold">15 Days</span>
      </button>
      
      <button
        className={`py-3 px-4 rounded-lg text-sm font-medium transition-all duration-200 flex flex-col items-center justify-center ${
          subscriptionDuration === '30'
            ? 'bg-green-100 text-green-700 border-2 border-green-300 shadow-sm'
            : 'bg-white text-gray-700 border border-gray-200 hover:border-green-300 hover:bg-green-50'
        }`}
        onClick={() => setSubscriptionDuration('30')}
      >
        <span className="font-semibold">1 Month</span>
      </button>
      
      <button
        className={`py-3 px-4 rounded-lg text-sm font-medium transition-all duration-200 flex flex-col items-center justify-center ${
          subscriptionDuration === '90'
            ? 'bg-purple-100 text-purple-700 border-2 border-purple-300 shadow-sm'
            : 'bg-white text-gray-700 border border-gray-200 hover:border-purple-300 hover:bg-purple-50'
        }`}
        onClick={() => setSubscriptionDuration('90')}
      >
        <span className="font-semibold">3 Months</span>
      </button>
      
      <button
        className={`py-3 px-4 rounded-lg text-sm font-medium transition-all duration-200 flex flex-col items-center justify-center ${
          subscriptionDuration === '180'
            ? 'bg-amber-100 text-amber-700 border-2 border-amber-300 shadow-sm'
            : 'bg-white text-gray-700 border border-gray-200 hover:border-amber-300 hover:bg-amber-50'
        }`}
        onClick={() => setSubscriptionDuration('180')}
      >
        <span className="font-semibold">6 Months</span>
      </button>
    </div>
    
  
  </div>
)}












                  <div className="flex justify-between mb-6">
                    <span className="text-lg font-semibold text-gray-800">Total</span>
                    <span className="text-xl font-bold text-gray-800">
                      ₹{parseFloat(order.price * subscriptionDuration || 0).toFixed(2)}
                    </span>
                  </div>

                  <button
                    onClick={handlePlaceOrder}
                    disabled={!defaultAddress}
                    className="w-full bg-gray-900 hover:bg-black disabled:bg-gray-400 text-white py-3.5 rounded-lg text-lg font-semibold transition-colors shadow-md hover:shadow-lg flex justify-center items-center"
                  >
                    {!defaultAddress ? 'Select Address First' : 
                      (isSettingDefault ? <FaSpinner className="animate-spin mr-2" /> : null)}
                    {defaultAddress && !isSettingDefault && 'Place Order'}
                  </button>
                </>
              ) : (
                <p className="text-gray-500 text-center py-8">No order details available.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}