import React, { useState } from 'react';
import { projects, Project as ProjectType } from '../data/projects';

interface ImageSliderProps {
  images: string[];
  mode: string;
}

function ImageSlider({ images, mode }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  const sliderContainerStyle = {
    position: 'relative' as const,
  };

  const imageContainerStyle = {
    position: 'relative' as const,
    overflow: 'hidden',
    borderRadius: '8px',
    backgroundColor: mode === 'dark' ? '#374151' : '#f3f4f6',
  };

  const imageStyle = {
    width: '100%',
    height: '280px',
    objectFit: 'cover' as const,
    transition: 'all 0.3s ease',
  };

  const buttonStyle = {
    position: 'absolute' as const,
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '8px',
    cursor: 'pointer',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  };

  const dotsContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '12px',
    gap: '8px',
  };

  const dotStyle = (isActive: boolean) => ({
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: isActive ? '#3b82f6' : (mode === 'dark' ? '#6b7280' : '#d1d5db'),
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  });

  return (
    <div 
      style={sliderContainerStyle}
      onMouseEnter={(e) => {
        const buttons = e.currentTarget.querySelectorAll('[data-nav-button]');
        buttons.forEach(btn => (btn as HTMLElement).style.opacity = '1');
      }}
      onMouseLeave={(e) => {
        const buttons = e.currentTarget.querySelectorAll('[data-nav-button]');
        buttons.forEach(btn => (btn as HTMLElement).style.opacity = '0');
      }}
    >
      <div style={imageContainerStyle}>
        <img
          src={images[currentIndex] || "/placeholder.svg"}
          alt={`Project ${currentIndex + 1}`}
          style={imageStyle}
        />

        {images.length > 1 && (
          <>
            <button
              style={{ ...buttonStyle, left: '8px' }}
              onClick={prevImage}
              data-nav-button
            >
              ←
            </button>

            <button
              style={{ ...buttonStyle, right: '8px' }}
              onClick={nextImage}
              data-nav-button
            >
              →
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div style={dotsContainerStyle}>
          {images.map((_, index) => (
            <button
              key={index}
              style={dotStyle(index === currentIndex)}
              onClick={() => goToImage(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

interface ProjectCardProps {
  project: ProjectType;
  mode: string;
}

function ProjectCard({ project, mode }: ProjectCardProps) {
  const isDark = mode === 'dark';
  
  const cardStyle = {
    width: '100%',
    backgroundColor: isDark ? '#1f2937' : 'white',
    borderRadius: '12px',
    boxShadow: isDark 
      ? '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)'
      : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    transition: 'box-shadow 0.3s ease',
    cursor: 'pointer',
    border: isDark ? '1px solid #374151' : '1px solid #e5e7eb',
  };

  const contentStyle = {
    padding: '24px',
  };

  const categoryStyle = {
    marginBottom: '16px',
    textAlign: 'center' as const,
  };

  const categoryTextStyle = {
    fontSize: '14px',
    fontWeight: '700',
    color: '#3b82f6',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
  };

  const titleStyle = {
    fontSize: '20px',
    fontWeight: '600',
    marginTop: '16px',
    marginBottom: '8px',
    color: isDark ? '#f9fafb' : '#1f2937',
  };

  const statusContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    marginBottom: '12px',
  };

  const statusDotStyle = (isOffline: boolean) => ({
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: isOffline ? '#ef4444' : '#10b981',
  });

  const statusTextStyle = {
    fontSize: '12px',
    color: isDark ? '#9ca3af' : '#6b7280',
  };

  const buttonsContainerStyle = {
    display: 'flex',
    gap: '8px',
    marginBottom: '16px',
  };

  const buttonStyle = (isPrimary: boolean) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    padding: '8px 16px',
    borderRadius: '12px',
    fontSize: '14px',
    fontWeight: '500',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    flex: 1,
    backgroundColor: isPrimary 
      ? (isDark ? '#1e3a8a' : '#eff6ff') 
      : (isDark ? '#374151' : '#f3f4f6'),
    color: isPrimary 
      ? (isDark ? '#dbeafe' : '#1d4ed8') 
      : (isDark ? '#d1d5db' : '#374151'),
  });

  const iconContainerStyle = (isPrimary: boolean) => ({
    width: '20px',
    height: '20px',
    backgroundColor: isPrimary ? '#3b82f6' : (isDark ? '#6b7280' : '#6b7280'),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '4px',
    transition: 'background-color 0.2s ease',
  });

  const descriptionStyle = {
    fontSize: '14px',
    color: isDark ? '#9ca3af' : '#6b7280',
    marginBottom: '16px',
    lineHeight: '1.6',
  };

  const technologiesContainerStyle = {
    marginTop: '8px',
  };

  const technologiesTitleStyle = {
    fontSize: '14px',
    fontWeight: '500',
    marginBottom: '8px',
    color: isDark ? '#e5e7eb' : '#374151',
  };

  const badgesContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '4px',
  };

  const badgeStyle = {
    backgroundColor: isDark ? '#374151' : '#f3f4f6',
    color: isDark ? '#d1d5db' : '#374151',
    padding: '4px 8px',
    borderRadius: '6px',
    fontSize: '12px',
    fontWeight: '500',
  };

  return (
    <div 
      style={cardStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = isDark
          ? '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.3)'
          : '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = isDark
          ? '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)'
          : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
      }}
    >
      <div style={contentStyle}>
        {/* Category */}
        <div style={categoryStyle}>
          <span style={categoryTextStyle}>{project.category}</span>
        </div>

        {/* Image Slider */}
        <ImageSlider images={project.images} mode={mode} />

        {/* Title */}
        <h3 style={titleStyle}>{project.title}</h3>

        {/* Status Indicator */}
        <div style={statusContainerStyle}>
          <div style={statusDotStyle(project.title.includes('TWSG'))}></div>
          <span style={statusTextStyle}>{project.title.includes('TWSG') ? 'Live Preview Offline' : 'Online & Ready for Preview'}</span>
        </div>

        {/* Action Buttons */}
        <div style={buttonsContainerStyle}>
          {project.sourceUrl && project.demoUrl ? (
            // Both buttons present - split equally
            <>
              <button 
                style={buttonStyle(false)}
                onClick={() => window.open(project.sourceUrl, '_blank')}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = isDark ? '#4b5563' : '#e5e7eb';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = isDark ? '#374151' : '#f3f4f6';
                }}
              >
                <div style={iconContainerStyle(false)}>
                  <span style={{ fontSize: '12px', color: 'white' }}>📁</span>
                </div>
                <span>Source</span>
              </button>
              <button 
                style={buttonStyle(true)}
                onClick={() => window.open(project.demoUrl, '_blank')}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = isDark ? '#1e40af' : '#dbeafe';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = isDark ? '#1e3a8a' : '#eff6ff';
                }}
              >
                <div style={iconContainerStyle(true)}>
                  <span style={{ fontSize: '12px', color: 'white' }}>🌐</span>
                </div>
                <span>Demo</span>
              </button>
            </>
          ) : (
            // Single button - full width
            <>
              {project.sourceUrl && (
                <button 
                  style={{ ...buttonStyle(false), width: '100%' }}
                  onClick={() => window.open(project.sourceUrl, '_blank')}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = isDark ? '#4b5563' : '#e5e7eb';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = isDark ? '#374151' : '#f3f4f6';
                  }}
                >
                  <div style={iconContainerStyle(false)}>
                    <span style={{ fontSize: '12px', color: 'white' }}>📁</span>
                  </div>
                  <span>Source</span>
                </button>
              )}
              {project.demoUrl && (
                <button 
                  style={{ ...buttonStyle(true), width: '100%' }}
                  onClick={() => window.open(project.demoUrl, '_blank')}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = isDark ? '#1e40af' : '#dbeafe';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = isDark ? '#1e3a8a' : '#eff6ff';
                  }}
                >
                  <div style={iconContainerStyle(true)}>
                    <span style={{ fontSize: '12px', color: 'white' }}>🌐</span>
                  </div>
                  <span>Demo</span>
                </button>
              )}
            </>
          )}
        </div>

        {/* Description */}
        <p style={descriptionStyle}>{project.description}</p>

        {/* Technologies */}
        <div style={technologiesContainerStyle}>
          <h4 style={technologiesTitleStyle}>Technologies Used:</h4>
          <div style={badgesContainerStyle}>
            {project.technologies.map((tech, index) => (
              <span key={index} style={badgeStyle}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

interface ProjectProps {
  parentToChild: { mode: string };
}

const Project = ({ parentToChild }: ProjectProps) => {
  const { mode } = parentToChild;
  const isDark = mode === 'dark';

  const containerStyle = {
    padding: '80px 10%',
    backgroundColor: isDark ? '#0d1116' : '#f8f9fa',
    minHeight: '100vh',
  };

  const headerStyle = {
    marginBottom: '32px',
    textAlign: 'center' as const,
  };

  const titleStyle = {
    fontSize: '48px',
    fontWeight: '700',
    marginBottom: '8px',
    color: isDark ? '#f9fafb' : '#1f2937',
  };

  const subtitleStyle = {
    color: isDark ? '#9ca3af' : '#6b7280',
    fontSize: '16px',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '32px',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 16px',
  };

  return (
    <div style={containerStyle} id="projects">
      <div style={headerStyle}>
        <h1 style={titleStyle}>My Projects</h1>
        <p style={subtitleStyle}>A collection of my recent work and experiments</p>
      </div>

      <div style={gridStyle}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} mode={mode} />
        ))}
      </div>
    </div>
  );
};

export default Project;
