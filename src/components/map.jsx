function MapComponent() {
     return ( 
     <div style={{ width: "100%", height: "400px" }}>
         {/* use an embeddable maps URL (output=embed) instead of the normal maps page which blocks framing */}
         <iframe
            src={`https://www.google.com/maps?q=30.403174,-9.5285335&z=14&output=embed`}
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