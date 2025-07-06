import React, { useEffect, useRef, useCallback } from 'react';

const VisitorTracker: React.FC = () => {
  const hasTracked = useRef(false);

  const generateSessionId = (): string => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  };

  const getDeviceType = (): string => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (/mobile|android|iphone|ipad|phone/i.test(userAgent)) {
      return 'Mobile';
    } else if (/tablet|ipad/i.test(userAgent)) {
      return 'Tablet';
    } else {
      return 'Desktop';
    }
  };

  const getBrowser = (): string => {
    const userAgent = navigator.userAgent;
    if (userAgent.includes('Chrome')) return 'Chrome';
    if (userAgent.includes('Firefox')) return 'Firefox';
    if (userAgent.includes('Safari')) return 'Safari';
    if (userAgent.includes('Edge')) return 'Edge';
    if (userAgent.includes('Opera')) return 'Opera';
    return 'Unknown';
  };

  const getBrowserVersion = useCallback((): string => {
    const userAgent = navigator.userAgent;
    const browser = getBrowser();
    const versionMatch = userAgent.match(new RegExp(`${browser}\\/(\\d+)`));
    return versionMatch ? versionMatch[1] : 'Unknown';
  }, []);

  const getOS = (): string => {
    const userAgent = navigator.userAgent;
    if (userAgent.includes('Windows')) return 'Windows';
    if (userAgent.includes('Mac')) return 'macOS';
    if (userAgent.includes('Linux')) return 'Linux';
    if (userAgent.includes('Android')) return 'Android';
    if (userAgent.includes('iOS')) return 'iOS';
    return 'Unknown';
  };

  const getOSVersion = useCallback((): string => {
    const userAgent = navigator.userAgent;
    const os = getOS();
    const versionMatch = userAgent.match(new RegExp(`${os}\\s*(\\d+[._]\\d+)`));
    return versionMatch ? versionMatch[1] : 'Unknown';
  }, []);

  const getWebGLInfo = () => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl') as WebGLRenderingContext;
      if (gl) {
        const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
        return {
          vendor: debugInfo ? gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL) : 'Unknown',
          renderer: debugInfo ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : 'Unknown'
        };
      }
    } catch (e) {}
    return { vendor: 'Unknown', renderer: 'Unknown' };
  };

  const getCanvasFingerprint = (): string => {
    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.textBaseline = 'top';
        ctx.font = '14px Arial';
        ctx.fillText('Canvas fingerprint test', 2, 2);
        return canvas.toDataURL().substring(0, 50);
      }
    } catch (e) {}
    return 'Unknown';
  };

  const getAudioContext = (): string => {
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      return audioContext.sampleRate.toString();
    } catch (e) {
      return 'Unknown';
    }
  };

  const sendToGoogleSheets = async (data: any): Promise<boolean> => {
    try {
      const scriptUrl = 'https://script.google.com/macros/s/AKfycbzaVJqnSfT1PpDP5k2YX5sw_UeXeIO7hO6jfUfOi1typYJw2GRN549f1q0GltVM6jbQgg/exec';
      
      const params = new URLSearchParams();
      params.append('action', 'track');
      params.append('data', JSON.stringify(data));
      
      const fullUrl = `${scriptUrl}?${params.toString()}`;
      
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await fetch(fullUrl, {
        method: 'GET',
        mode: 'no-cors',
      });
      
      return true;
      
    } catch (error) {
      return false;
    }
  };

  useEffect(() => {
    if (hasTracked.current) {
      return;
    }

    hasTracked.current = true;

    const trackVisitor = async () => {
      try {
        const comprehensiveData = {
          timestamp: new Date().toISOString(),
          sessionId: generateSessionId(),
          userAgent: navigator.userAgent,
          platform: navigator.platform,
          deviceMemory: (navigator as any).deviceMemory || 'Unknown',
          hardwareConcurrency: navigator.hardwareConcurrency || 'Unknown',
          maxTouchPoints: navigator.maxTouchPoints || 'Unknown',
          screenWidth: window.screen.width,
          screenHeight: window.screen.height,
          screenAvailWidth: window.screen.availWidth,
          screenAvailHeight: window.screen.availHeight,
          screenColorDepth: window.screen.colorDepth,
          screenPixelDepth: window.screen.pixelDepth,
          devicePixelRatio: window.devicePixelRatio,
          viewportWidth: window.innerWidth,
          viewportHeight: window.innerHeight,
          outerWidth: window.outerWidth,
          outerHeight: window.outerHeight,
          language: navigator.language,
          languages: navigator.languages ? navigator.languages.join(',') : 'Unknown',
          cookieEnabled: navigator.cookieEnabled,
          doNotTrack: navigator.doNotTrack,
          onLine: navigator.onLine,
          connectionType: (navigator as any).connection?.effectiveType || 'Unknown',
          connectionDownlink: (navigator as any).connection?.downlink || 'Unknown',
          connectionRtt: (navigator as any).connection?.rtt || 'Unknown',
          memoryTotal: (performance as any).memory?.totalJSHeapSize || 'Unknown',
          memoryUsed: (performance as any).memory?.usedJSHeapSize || 'Unknown',
          memoryLimit: (performance as any).memory?.jsHeapSizeLimit || 'Unknown',
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          timezoneOffset: new Date().getTimezoneOffset(),
          currentTime: new Date().toLocaleString(),
          pageUrl: window.location.href,
          pageTitle: document.title,
          referrer: document.referrer || 'Direct',
          documentEncoding: document.characterSet,
          deviceType: getDeviceType(),
          browser: getBrowser(),
          browserVersion: getBrowserVersion(),
          os: getOS(),
          osVersion: getOSVersion(),
          isMobile: /Mobile|Android|iPhone|iPad|Phone/i.test(navigator.userAgent),
          isTablet: /Tablet|iPad/i.test(navigator.userAgent),
          isDesktop: !(/Mobile|Android|iPhone|iPad|Phone|Tablet/i.test(navigator.userAgent)),
          webglVendor: getWebGLInfo().vendor,
          webglRenderer: getWebGLInfo().renderer,
          canvasFingerprint: getCanvasFingerprint(),
          audioContext: getAudioContext(),
          batteryLevel: 'Unknown',
          batteryCharging: 'Unknown',
          geolocationSupported: 'geolocation' in navigator,
          notificationsSupported: 'Notification' in window,
          pushSupported: 'PushManager' in window,
          serviceWorkerSupported: 'serviceWorker' in navigator,
          localStorageSupported: typeof Storage !== 'undefined',
          sessionStorageSupported: typeof sessionStorage !== 'undefined',
          indexedDBSupported: 'indexedDB' in window,
          mediaDevicesSupported: 'mediaDevices' in navigator,
          getUserMediaSupported: 'getUserMedia' in navigator,
          webRTCSupported: 'RTCPeerConnection' in window,
          webSocketSupported: 'WebSocket' in window,
          fetchSupported: 'fetch' in window,
          isSecureContext: window.isSecureContext,
          origin: window.location.origin,
          protocol: window.location.protocol,
          ip: 'Unknown',
          country: 'Unknown',
          city: 'Unknown',
          region: 'Unknown',
          latitude: 'Unknown',
          longitude: 'Unknown',
          isp: 'Unknown',
          networkTimezone: 'Unknown',
          postalCode: 'Unknown',
          countryCode: 'Unknown',
          regionCode: 'Unknown',
          javaEnabled: navigator.javaEnabled(),
          appName: navigator.appName,
          appVersion: navigator.appVersion,
          appCodeName: navigator.appCodeName,
          product: navigator.product,
          productSub: navigator.productSub,
          vendor: navigator.vendor,
          vendorSub: navigator.vendorSub,
          windowName: window.name,
          windowOpener: window.opener ? 'Yes' : 'No',
          windowFrames: window.frames.length,
          documentReadyState: document.readyState,
          documentLastModified: document.lastModified,
          documentDomain: document.domain,
          documentReferrer: document.referrer,
          historyLength: window.history.length,
          locationHash: window.location.hash,
          locationHost: window.location.host,
          locationHostname: window.location.hostname,
          locationPathname: window.location.pathname,
          locationPort: window.location.port,
          locationSearch: window.location.search,
        };
        
        try {
          const ipResponse = await fetch('https://api.ipify.org?format=json');
          const ipData = await ipResponse.json();
          
          const geoResponse = await fetch(`https://ipapi.co/${ipData.ip}/json/`);
          const geoData = await geoResponse.json();
          
          comprehensiveData.ip = ipData.ip;
          comprehensiveData.country = geoData.country_name || 'Unknown';
          comprehensiveData.city = geoData.city || 'Unknown';
          comprehensiveData.region = geoData.region || 'Unknown';
          comprehensiveData.latitude = geoData.latitude || 'Unknown';
          comprehensiveData.longitude = geoData.longitude || 'Unknown';
          comprehensiveData.isp = geoData.org || 'Unknown';
          comprehensiveData.networkTimezone = geoData.timezone || 'Unknown';
          comprehensiveData.postalCode = geoData.postal || 'Unknown';
          comprehensiveData.countryCode = geoData.country_code || 'Unknown';
          comprehensiveData.regionCode = geoData.region_code || 'Unknown';
        } catch (geoError) {
          // Silent fail
        }
        
        try {
          if ('getBattery' in navigator) {
            const battery = await (navigator as any).getBattery();
            comprehensiveData.batteryLevel = battery.level;
            comprehensiveData.batteryCharging = battery.charging;
          }
        } catch (batteryError) {
          // Silent fail
        }
        
        await sendToGoogleSheets(comprehensiveData);
        
        console.log('Visitor log updated!');
        
      } catch (error) {
        // Silent fail
      }
    };

    trackVisitor();
  }, [getBrowserVersion, getOSVersion]);

  return null;
};

export default VisitorTracker; 