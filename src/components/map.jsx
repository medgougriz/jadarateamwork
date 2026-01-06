function MapComponent() {
     return ( 
     <div style={{ width: "100%", height: "400px" }}>
         {/* use an embeddable maps URL (output=embed) instead of the normal maps page which blocks framing */}
         <iframe
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2719.349552406364!2d-9.71112031647218!3d30.543869714475846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb24d2681cae4f1%3A0xa12365a36efbb31c!2sTaghazout%20Beach!5e1!3m2!1sen!2sma!4v1767699109029!5m2!1sen!2sma`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
         />
     </div>
          ); 
         } 
         
         export default MapComponent;

