import { FaHeart } from 'react-icons/fa6';
import { useState } from 'react';
import QRCodeComponent from '../QRCodeComponent';
import { filterDonationMethods } from '@/utils/paymentMethods';
import { LuSearchSlash } from 'react-icons/lu';

const OrgCard = ({ org, onLearnMore, showQRCode }) => {
  const paymentOptions = filterDonationMethods(org);
  const defaultLogo = `https://placehold.co/300x200/?text=${org.name}`;
  const [imgSrc, setImgSrc] = useState(org.logo || defaultLogo);

  const handleImageError = () => {
    setImgSrc(`${defaultLogo}${org.name}`);
  };

  const hasValidPaymentMethods = org.paymentMethods.some(
    (method) =>
      method.paymentID &&
      (typeof method.paymentID !== 'string' || method.paymentID.length > 0)
  );

  const generateQRCodeLink = (npCode) => {
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
    return `${baseUrl}/?paymentMethod=${showQRCode || ''}&npCode=${npCode}`;
  };

  return (
    <div
      className={`border border-[#8A2BE225] rounded-[9px] md:rounded-[10px] ${
        showQRCode ? '' : 'h-auto '
      }`}
    >
      <div className="w-full h-[115px] bg-[#FEFCFC] rounded-[9px] md:rounded-[10px] border border-[#8A2BE225] flex flex-row items-center justify-center">
        <img
          src={imgSrc}
          alt={org.name}
          width={100}
          height={100}
          className="w-auto h-[100px] object-contain"
        />
      </div>
      <div className="pt-[18px] md:pt-[21px] pb-[26px] md:pb-[30px] px-[22px] md:px-[26px] w-full font-sans">
        <p className="text-[#3B284B] text-[21px] md:text-[24px] font-semibold truncate max-w-full md:mb-[10px]">
          {org.name}
        </p>

        <p className="text-[#4E4556] text-[13px] md:text-[15px] leading-[16px] font-normal line-clamp-2 overflow-hidden">
          {org.description ? org.description : org.name}
        </p>

        {showQRCode ? (
          <div className="flex flex-row items-center justify-center w-full mt-6">
            <QRCodeComponent
              link={generateQRCodeLink(org.npCode)}
              cta={'Scan to Donate'}
            />
          </div>
        ) : hasValidPaymentMethods ? (
          <div className="flex flex-row items-center w-2/3 mt-[20px] md:mt-[23px] gap-3 ">
            <button
              onClick={() => onLearnMore(org)}
              className="text-[16px] md:text-[19px] flex flex-row items-center justify-center font-medium gap-2 px-2 py-1 border-[0.7px] border-[#8A2BE2] text-primary bg-[#8A2BE210] rounded-[5px]"
            >
              Donate
              <FaHeart className="opacity-50 hover:opacity-100" />
            </button>

            <div className="flex flex-row items-center">
              {paymentOptions.map((i, index) => {
                return (
                  <img
                    className={`border border-[#FEFCFC] bg-white flex flex-col items-center justify-center rounded-lg ${
                      index !== 0 ? 'ml-[-0.3rem]' : ''
                    }`}
                    key={i.method}
                    onError={() => {
                      handleImageError();
                      console.log(i.method, 'error image on this method');
                    }}
                    src={i.icon}
                    alt={`${i.method} icon`}
                    width={24}
                    height={24}
                  />
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
export const DonationOrganizations = ({
  data,
  onOpenDialog,
  showQRCode,
  useTestPaymentID,
}) => {
  return (
    <>
      {data && data.length > 0 ? (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
          {data.map((i) => {
            return (
              <OrgCard
                key={i.npCode}
                org={i}
                onLearnMore={() => onOpenDialog(i)}
                showQRCode={showQRCode}
                useTestPaymentID={useTestPaymentID}
              />
            );
          })}
        </div>
      ) : (
        <div className="font-sans text-xl gap-6 p-12 flex flex-col items-center justify-center">
          <LuSearchSlash size={50} className='text-gray-400'/>
          <p className="font-sans font-medium text-sm text-center text-gray-500">
            Sorry, there are no Donation Organizations currently using this
            payment method yet!
          </p>
        </div>
      )}
    </>
  );
};
