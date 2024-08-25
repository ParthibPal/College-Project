import React from 'react';
import Card from "../components/Card";
import '../App.css';
const ServicesPage = (props) => {
  return (
    <div className="services-page">
      <header className="header">
        <h1>Explore Local Services</h1>
        <p>Discover a wide range of services offered by local professionals</p>
      </header>
      <section className="services">
        <Card imageSrc="/images/plumbing.jpg" name = "Plumbing Services" desc = "Quality plumbing solutions for your home or office."/>
        <Card imageSrc="/images/Electrician Services.jpg" name = "Electrician Services" desc = "Expert electricians to solve your electrical needs."/>
        <Card imageSrc="/images/Cleaning Services.jpg" name = "Cleaning Services" desc = "Professional cleaning services tailored to your needs."/>
        <Card imageSrc="/images/Lawn Care Services.jpg" name = "Lawn Care Services" desc = "Keep your lawn healthy and well-maintained."/>
        <Card imageSrc="/images/Painting Services.jpg" name = "Painting Services" desc = "Interior and exterior painting services for homes and businesses."/>
        <Card imageSrc="/images/Carpet Cleaning.jpg" name = "Carpet Cleaning" desc = "Deep cleaning solutions for carpets and rugs."/>
        <Card imageSrc="/images/Handyman Services.jpg" name = "Handyman Services" desc = "General repair and maintenance services for your property."/>
        <Card imageSrc="/images/Moving Services.jpg" name = "Moving Services" desc = "Reliable moving and packing services for hassle-free relocation."/>
        <Card imageSrc="/images/Computer Services.jpg" name = "Computer Services" desc = "Expert assistance with computer hardware and software issues."/>
        <Card imageSrc="/images/Event Planning.jpg" name = "Event Planning" desc = "Plan and organize memorable events with professional assistance."/>
        <Card imageSrc="/images/Photo Services.jpg" name = "Photo Services" desc = "Capture special moments with skilled photographers."/>
        <Card imageSrc="/images/Graphic Design.jpg" name = "Graphic Design" desc = "Create impactful visuals and designs for your business or project."/>
        <Card imageSrc="/images/Web Development.jpg" name = "Web Development" desc = "Build and maintain responsive websites tailored to your needs."/>
        <Card imageSrc="/images/Massage Therapy.jpg" name = "Massage Therapy" desc = "Relax and rejuvenate with professional massage therapy sessions."/>
        <Card imageSrc="/images/Tutoring Services.jpg" name = "Tutoring Services" desc = "Personalized tutoring to help you excel academically."/>
        <Card imageSrc="/images/Fitness Training.jpg" name = "Fitness Training" desc = "Personalized fitness plans and training sessions."/>
        <Card imageSrc="/images/Legal Services.jpg" name = "Legal Services" desc = "Legal advice and services from experienced professionals."/>
        <Card imageSrc="/images/Interior Design.jpg" name = "Interior Design" desc = "Create functional and aesthetically pleasing interiors for your space."/>
        <Card imageSrc="/images/Car Repair Services.jpg" name = "Car Repair Services" desc = "Expert repair and maintenance for your vehicle."/>
        <Card imageSrc="/images/Personal Chef.jpg" name = "Personal Chef" desc = "Enjoy gourmet meals prepared by a professional chef at home."/>
        <Card imageSrc="/images/Music Lessons.jpg" name = "Music Lessons" desc = "Learn to play an instrument or improve your musical skills."/>
        <Card imageSrc="/images/Wedding Planning.jpg" name = "Wedding Planning" desc = "Plan and organize your dream wedding with expert assistance."/>
        <Card imageSrc="/images/Real Estate Services.jpg" name = "Real Estate Services" desc = "Buy, sell, or rent properties with guidance from real estate professionals."/>
        <Card imageSrc="/images/Pet Grooming.jpg" name = "Pet Grooming" desc = "Keep your pets clean and healthy with professional grooming services."/>
        <Card imageSrc="/images/Financial Planning.jpg" name = "Financial Planning" desc = "Plan your finances and investments with expert financial advisors."/>
        <Card imageSrc="/images/Language Lessons.jpg" name = "Language Lessons" desc = "Learn a new language or improve your language skills with language tutors"/>
        <Card imageSrc="/images/Art Classes.jpg" name = "Art Classes" desc = "Explore your creativity with art classes and workshops."/>
        <Card imageSrc="/images/Personal Stylist.jpg" name = "Personal Stylist" desc = "Receive personalized fashion advice and styling services."/>
        <Card imageSrc="/images/Yoga Classes.jpg" name = "Yoga Classes" desc = "Practice yoga and improve your physical and mental well-being."/>

      </section>
      <footer name="footer">
        <p>&copy; 2024 Local Services Marketplace. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default ServicesPage;
