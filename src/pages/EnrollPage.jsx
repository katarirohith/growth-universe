// src/pages/EnrollPage.jsx
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";

const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup
    .string()
    .matches(/^[0-9]{10}$/, "Invalid phone number")
    .required("Phone number is required"),
  organization: yup.string().required("Organization name is required"),
  role: yup.string().required("Role is required"),
  serviceType: yup.string().required("Service type is required"),
  participants: yup
    .number()
    .positive()
    .integer()
    .required("Number of participants is required"),
  preferredDate: yup
    .date()
    .min(new Date(), "Date must be in the future")
    .required("Preferred date is required"),
  additionalInfo: yup.string(),
});

const RequiredLabel = ({ children }) => (
  <span>
    {children} <span className="text-red-500">*</span>
  </span>
);

RequiredLabel.propTypes = {
  children: PropTypes.node.isRequired,
};

const EnrollPage = () => {
  const { offeringId } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      serviceType: offeringId,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    alert(
      "Enrollment request submitted successfully! We will contact you soon."
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-background min-h-screen py-12"
    >
      <div className="w-full max-w-3xl mx-auto p-8">
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Enroll in Service
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-gray-700 mb-1">
                  <RequiredLabel>First Name</RequiredLabel>
                </label>
                <input
                  type="text"
                  id="firstName"
                  {...register("firstName")}
                  className="w-full rounded-lg border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="lastName" className="block text-gray-700 mb-1">
                  <RequiredLabel>Last Name</RequiredLabel>
                </label>
                <input
                  type="text"
                  id="lastName"
                  {...register("lastName")}
                  className="w-full rounded-lg border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 mb-1">
                <RequiredLabel>Email</RequiredLabel>
              </label>
              <input
                type="email"
                id="email"
                {...register("email")}
                className="w-full rounded-lg border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-gray-700 mb-1">
                <RequiredLabel>Phone Number</RequiredLabel>
              </label>
              <input
                type="tel"
                id="phone"
                {...register("phone")}
                className="w-full rounded-lg border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="organization"
                className="block text-gray-700 mb-1"
              >
                <RequiredLabel>Organization</RequiredLabel>
              </label>
              <input
                type="text"
                id="organization"
                {...register("organization")}
                className="w-full rounded-lg border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              {errors.organization && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.organization.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="role" className="block text-gray-700 mb-1">
                <RequiredLabel>Role</RequiredLabel>
              </label>
              <input
                type="text"
                id="role"
                {...register("role")}
                className="w-full rounded-lg border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              {errors.role && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.role.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="serviceType" className="block text-gray-700 mb-1">
                <RequiredLabel>Service Type</RequiredLabel>
              </label>
              <select
                id="serviceType"
                {...register("serviceType")}
                className="w-full rounded-lg border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">Select a service type</option>
                <option value="online-courses">Online Courses</option>
                <option value="workshops">Workshops</option>
                <option value="events">Events</option>
                <option value="digital-content">Digital Content</option>
                <option value="coaching-programs">Coaching Programs</option>
              </select>
              {errors.serviceType && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.serviceType.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="participants"
                className="block text-gray-700 mb-1"
              >
                <RequiredLabel>Number of Participants</RequiredLabel>
              </label>
              <input
                type="number"
                id="participants"
                {...register("participants")}
                className="w-full rounded-lg border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              {errors.participants && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.participants.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="preferredDate"
                className="block text-gray-700 mb-1"
              >
                <RequiredLabel>Preferred Date</RequiredLabel>
              </label>
              <input
                type="date"
                id="preferredDate"
                {...register("preferredDate")}
                className="w-full rounded-lg border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              {errors.preferredDate && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.preferredDate.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="additionalInfo"
                className="block text-gray-700 mb-1"
              >
                Additional Information
              </label>
              <textarea
                id="additionalInfo"
                {...register("additionalInfo")}
                rows="4"
                className="w-full rounded-lg border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              ></textarea>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Submit Enrollment Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default EnrollPage;
