export default function Particles(props){
    return<>
        <points>
            <planeGeometry args={ [2, 2, 100, 100] } />
            <pointsMaterial color={ '#ffffff' } size={ 0.01 } />
        </points>
    </> 
}